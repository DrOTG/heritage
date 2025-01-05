import { Outlet, useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { useReducer } from "react";
import { Card } from "primereact/card";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";

const adminInitialState = {
  sideBarOpen:false,
}

function adminReducer(state,action) {
  switch (action.type) {
    case "sideBarOpen":
      return {
        ...state,
        sideBarOpen:action.payload
      }
  
    default:
      return state
  }
}

export default function AdminRoot() {
  const [adminState,dispatch] = useReducer(adminReducer,adminInitialState)
  const navigate = useNavigate()

  function toggleSideBarOpen() {
    return {
      type:"sideBarOpen",
      payload:!adminState.sideBarOpen
    }
  }

  function hideSideBar() {
    return {
      type:"sideBarOpen",
      payload:false
    }
  }

  const sideBarContent = (
    <Card header={(
      <img
        src="favicon.png"
        alt="Logo"
        className="navbar-logo"
        onClick={() => navigate('/admin')}
      />
    )} title="Admin" >
      <Menu model={[
        {
          label:"Go to site",
          command: (e) => {
            navigate("/")
          }
        }
      ]} />
    </Card>
  )

  return (
    <>
    <div className="p-0">
      <Toolbar start={(
        <div>
          <Button icon={adminState.sideBarOpen?"pi pi-times":"pi pi-bars"} onClick={(e)=>{
            dispatch(toggleSideBarOpen())
          }} text />
        </div>
      )} />
    </div>
    <Sidebar className="block md:hidden" visible={adminState.sideBarOpen} onHide={(e)=>{dispatch(hideSideBar())}} dismissable={false} maskClassName="pointer-events-none bg-none">{sideBarContent}</Sidebar>
    <div className="grid m-0">
      <div className="col-fixed p-0 overflow-hidden hidden md:block transition-all transition-duration-500" style={{width:adminState.sideBarOpen?"300px":"0px"}}>{sideBarContent}</div>
      <div className="col">
        <Outlet />
      </div>
    </div>
    </>
  )
}