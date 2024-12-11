import { useState } from 'react'
import { Menubar } from 'primereact/menubar'
import logo from './assets/logo.png'
import { GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <>
    <Menubar start={(
      <div style={{display:"flex",alignItems:"center",fontSize:"24px",fontWeight:"bolder",color:"var(--primary-color)"}}>
        <img src={logo} height={50} />
      </div>
    )} />
    <div style={{padding:"0 16px"}}>
      <GoogleLogin
        theme='filled_black'
        shape='circle'
        onSuccess={(credentialResponse)=>{
          console.log(credentialResponse)
        }}
        onError={()=>{
          console.log("failed")
        }}/>
    </div>
    </>
  )
}

export default App
