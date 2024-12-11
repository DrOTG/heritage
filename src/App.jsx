import { useState } from 'react'
import { Menubar } from 'primereact/menubar'
import logo from './assets/react.svg'

function App() {
  return (
    <>
    <Menubar start={(
      <div style={{display:"flex",alignItems:"center",fontSize:"24px",fontWeight:"bolder",color:"var(--primary-color)"}}>
        <img src={logo} width={50} height={50} />
        <span style={{padding:"0 8px"}}>DrOTG</span>
      </div>
    )} />
    <div style={{padding:"0 16px"}}>
      <script src="https://accounts.google.com/gsi/client" async></script>
      <div id="g_id_onload"
          data-client_id="1053050806046-t1ne3ogj3jf5qupfk9heaahia06mih75.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="onSignIn"
          data-auto_prompt="false">
      </div>

      <div className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="filled_black"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
      </div>
    </div>
    </>
  )
}

export default App
