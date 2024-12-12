import { useContext, useEffect, useState } from 'react'
import { Menubar } from 'primereact/menubar'
import logo from './assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { UserContext } from './context';

function App() {
  const userData = useContext(UserContext)
  const navigate = useNavigate()

  function goToProfile(e) {
    if(userData.user === null) {
      navigate("/login")
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
