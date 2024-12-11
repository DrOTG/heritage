import { useReducer } from "react"

function UserProvider({children}) {
  const [userData,dispatch] = useReducer()
  return (
    <>{children}</>
  )
}