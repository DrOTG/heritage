import { useContext, useEffect } from "react"
import { UserContext } from "../context"
import { useLocation, useNavigate } from "react-router-dom"

export default function RequireLogin({children}) {
  const userData = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    console.log(userData)
    if(userData.user === null && userData.userInit === false) {
      navigate(`/login?next=${location.pathname}`)
    }
  })

  return (
    <div>
      {userData.user === null ? "Please login" : (
        <>{children}</>
      ) }
    </div>
  )
}