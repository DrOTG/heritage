import { GoogleLogin } from "@react-oauth/google";
import { Card } from "primereact/card";
import { useContext, useEffect, useRef } from "react";
import { DispatchUserData, ToastContext, UserContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const userDispatch = useContext(DispatchUserData)
  const userData = useContext(UserContext)
  const toastRef = useContext(ToastContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(userData.user !== null) {
      navigate("/profile")
    }
  })

  return (
    <div>
      <Card style={{maxWidth:"300px",margin:"auto"}} title='Login' footer={(
        <div style={{backgroundColor:"white",padding:"16px"}}>
          <center>
            <GoogleLogin
              theme='filled_black'
              shape='circle'
              onSuccess={(credentialResponse)=>{
                localStorage.setItem("credentials",credentialResponse.credential)
                userDispatch({
                  type:"credentials",
                  payload:credentialResponse.credential
                })
              }}
              onError={()=>{
                toastRef.current.show({severity:"error",summary:"Login Error",detail:"Login with google failed."})
              }}
            />
          </center>
        </div>
      )}></Card>
    </div>
  )
}