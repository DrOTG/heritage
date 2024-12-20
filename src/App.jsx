import { useContext, useEffect, useState, useRef } from 'react'
import { Menubar } from 'primereact/menubar'
import logo from './assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { ToastContext, UserContext } from './context';
import { Toast } from 'primereact/toast';

function App() {
  const userData = useContext(UserContext)
  const navigate = useNavigate()
  const toastRef = useContext(ToastContext)

  function goToProfile(e) {
    if(userData.user === null) {
      navigate("/login")
      if(userData.userError) {
        toastRef.current.show({severity:"error",summary:"User Error",detail:userData.userError})
      }
    } else {
      navigate("/profile")
    }
  }

  return (
    <>
    <Menubar start={(
      <div style={{display:"flex",alignItems:"center",fontSize:"24px",fontWeight:"bolder",color:"var(--primary-color)"}}>
        <img src={logo} height={50} onClick={()=>{navigate("/")}} style={{cursor:"pointer"}} />
      </div>
    )} end={(
      <Button style={{background:"none"}} onClick={goToProfile}>
        {userData.user ? <Avatar image={userData.user.picture} shape='circle' /> : <Avatar icon='pi pi-user' shape='circle' /> }
      </Button>
    )} />
    <div style={{padding:"16px"}}>
      <Outlet />
    </div>
    </>
  )
}

export default App
