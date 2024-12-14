import { Card } from "primereact/card";
import { useContext } from "react";
import { DispatchUserData, UserContext } from "../context";
import {Button} from 'primereact/button'
import PaymentMethods from "../components/PaymentMethods";
import Subscriptions from "../components/Subscriptions";

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
    <div className="grid">
      <div className="col-12 md:col-4">
        <Card
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
      <div className="col-12 md:col-8">
        <div className="flex flex-column gap-2">
          <PaymentMethods />
          <Subscriptions />
        </div>
      </div>
    </div>
  )
}