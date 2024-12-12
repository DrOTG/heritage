import { GoogleLogin } from "@react-oauth/google";
import { Card } from "primereact/card";
import { useContext, useEffect, useRef } from "react";
import { DispatchUserData, UserContext } from "../context";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const userDispatch = useContext(DispatchUserData)
  const userData = useContext(UserContext)
  const toastRef = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    if(userData.user !== null) {
      navigate("/")
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
                console.log(credentialResponse) // TODO: remove this
              }}
              onError={()=>{
                toastRef.current.show({})
                console.log("failed")
              }}
            />
          </center>
        </div>
      )}></Card>
      <Toast ref={toastRef} />
    </div>
  )
}