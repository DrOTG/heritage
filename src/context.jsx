import { jwtDecode } from "jwt-decode";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { createContext, useEffect, useReducer, useRef } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialData = {
  user:null,
  userInit:true,
  userError:null,
  firebaseApp:null,
}

function userReducer(state,action) {
  switch (action.type) {
    case "credentials": {
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
        return {
          ...state,
          user:user,
          userError:null,
          userInit:false
        }
      } else {
        return {
          ...state,
          userInit:false,
          userError:"Token expired!"
        }
      }
    }

    case "firebaseApp":
      return {
        ...state,
        firebaseApp:action.payload
      }
    
    case "user":
      return {
        ...state,
        user:action.payload,
      }
    
    case "init":
      return {
        ...state,
        userInit:false,
        userError:null
      }
    
    case "logout":
      console.log("logout")
      return {
        ...state,
        user:null,
        userError:null,
        userInit:false
      }
  
    default:
      return state
  }
}

export const UserContext = createContext(initialData)
export const DispatchUserData = createContext(null)
export const ToastContext = createContext(null)

export function UserProvider({children}) {
  const [userData,dispatch] = useReducer(userReducer,initialData)
  const toastRef = useRef(null)

  function initializeFirebaseApp() {
    if(userData.firebaseApp === null) {
      const firebaseConfig = {
      
        apiKey: "AIzaSyB6cauL4JBfeJ7aEhEjDPzUtUWZKdCpX1Q",
      
        authDomain: "exsae-technologies.firebaseapp.com",
      
        databaseURL: "https://exsae-technologies.firebaseio.com",
      
        projectId: "exsae-technologies",
      
        storageBucket: "exsae-technologies.firebasestorage.app",
      
        messagingSenderId: "1053050806046",
      
        appId: "1:1053050806046:web:41bd9d08bd419ab5a3330f"
      
      };
      
      const app = initializeApp(firebaseConfig);
      dispatch({
        type:"firebaseApp",
        payload:app,
      })

      const auth = getAuth(app)
      onAuthStateChanged(auth,(user) => {
        if(user){
          dispatch({
            type:"user",
            payload:user,
          })
        }
      })
    }
  }

  useEffect(()=>{
    initializeFirebaseApp()
    const credentials = localStorage.getItem("credentials")
    if (credentials) {
      dispatch({
        type:"credentials",
        payload:credentials
      })
    } else {
      dispatch({
        type:"init"
      })
    }
  },[])

  return (
    <UserContext.Provider value={userData}>
      <DispatchUserData.Provider value={dispatch}>
        <ToastContext.Provider value={toastRef}>
          {userData.userInit ? (
            <center>
              <ProgressSpinner />
            </center>
          ) : (
            <>{children}</>
          ) }
        </ToastContext.Provider>
        <Toast ref={toastRef} />
      </DispatchUserData.Provider>
    </UserContext.Provider>
  )
}