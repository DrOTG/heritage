import { useContext, useState } from 'react'
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
    }
  }
  
  return (
    <>
    <Menubar start={(
      <div style={{display:"flex",alignItems:"center",fontSize:"24px",fontWeight:"bolder",color:"var(--primary-color)"}}>
        <img src={logo} height={50} />
      </div>
    )} end={(
      <Button style={{background:"none"}} onClick={goToProfile}>
        <Avatar icon='pi pi-user' shape='circle' />
      </Button>
    )} />
    <div style={{padding:"0 16px"}}>
      {/* <GoogleLogin
        theme='filled_black'
        shape='circle'
        onSuccess={(credentialResponse)=>{
          console.log(credentialResponse)
          const decoded = jwtDecode(credentialResponse.credential)
          console.log(decoded)
        }}
        onError={()=>{
          console.log("failed")
        }}/> */}
        <Outlet />
    </div>
    </>
  )
}

export default App
