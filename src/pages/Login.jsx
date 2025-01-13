import { GoogleLogin } from "@react-oauth/google";
import { Card } from "primereact/card";
import { useContext, useEffect, useRef } from "react";
import { DispatchUserData, ToastContext, UserContext } from "../context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "primereact/button";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function Login() {
  const userDispatch = useContext(DispatchUserData)
  const userData = useContext(UserContext)
  const toastRef = useContext(ToastContext)
  const navigate = useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()

  useEffect(()=>{
    if(userData.user !== null) {
      let next = searchParams.get("next") ?? "/profile"
      navigate(next)
    }
  })

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(userData.firebaseApp)
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <Card style={{maxWidth:"300px",margin:"auto"}} title='Login' footer={(
        <div style={{backgroundColor:"white",padding:"16px"}}>
          <center>
            <Button label="Login with Google" onClick={(e)=>{loginWithGoogle()}} />
          </center>
        </div>
      )}></Card>
    </div>
  )
}