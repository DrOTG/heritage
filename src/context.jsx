import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom";

const initialData = {
  user:null,
  userInit:true,
  userError:null,
}

function userReducer(state,action) {
  switch (action.type) {
    case "credentials":
      const payload = jwtDecode(action.payload)
      var today = new Date()
      var tokenDate = new Date(payload.exp*1000)
      if (tokenDate > today) {
        const user = {
          id:payload.sub,
          email:payload.email,
          email_verified:payload.email_verified,
          firstName:payload.given_name,
          lastName:payload.family_name,
          picture:payload.picture
        }
        state.user = user
        state.userError = null
        state.userInit = false
        return state
      } else {
        state.userInit = false
        state.userError = "Token expired!"
        return state
      }
  
    default:
      return state
  }
}

export const UserContext = createContext(initialData)
export const DispatchUserData = createContext(null)

export function UserProvider({children}) {
  const [userData,dispatch] = useReducer(userReducer,initialData)

  useEffect(()=>{
    const credentials = localStorage.getItem("credentials")
    if (credentials) {
      dispatch({
        type:"credentials",
        payload:credentials
      })
    }
  },[])

  return (
    <UserContext.Provider value={userData}>
      <DispatchUserData.Provider value={dispatch}>
        {children}
      </DispatchUserData.Provider>
    </UserContext.Provider>
  )
}