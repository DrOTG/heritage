import { Card } from "primereact/card";
import { useContext } from "react";
import { DispatchUserData, UserContext } from "../context";
import {Button} from 'primereact/button'

export default function Profile() {
  const userData = useContext(UserContext)
  const userDispatch = useContext(DispatchUserData)

  function logout() {
    localStorage.removeItem("credentials")
    userDispatch({
      type:"logout"
    })
  }

  return (
    <div>
      <Card
        style={{maxWidth:"500px",margin:"auto"}}
        title={userData.user.firstName+" "+userData.user.lastName}
        subTitle={userData.user.email}
        header={(
          <img src={userData.user.picture} />
        )}
        footer={(
          <div style={{display:"flex",justifyContent:"end",gap:"8px"}}>
            <Button label="Logout" severity="danger" onClick={(e)=>{logout()}} />
          </div>
        )}></Card>
    </div>
  )
}