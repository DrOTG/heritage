import { Card } from "primereact/card";
import { useContext } from "react";
import { UserContext } from "../context";

export default function Profile() {
  const userData = useContext(UserContext)

  return (
    <div>
      {userData.userInit ? null : (
      <Card
        style={{maxWidth:"500px",margin:"auto"}}
        title={userData.user.firstName+" "+userData.user.lastName} 
        subTitle={userData.user.email}
        header={(
          <img src={userData.user.picture} />
        )}></Card>
      ) }
    </div>
  )
}