import { Card } from "primereact/card";
import { useContext, useEffect, useRef } from "react";
import { DispatchUserData, ToastContext, UserContext } from "../context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "primereact/button";

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

  return (
    <div className="mt-6">
      <Card style={{maxWidth:"300px",margin:"auto"}} title="Login" footer={(
        <div style={{padding:"16px"}}>
          <Button label="Login" icon="pi pi-lock" />
        </div>
      )}></Card>
    </div>
  )
}