import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-dark-purple/theme.css"
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { PrimeReactProvider } from 'primereact/api'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login.jsx'
import { UserProvider } from './context.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import RequireLogin from './components/RequireLogin.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"login",
        element: <Login />
      },
      {
        path:"profile",
        element:<RequireLogin><Profile /></RequireLogin>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <GoogleOAuthProvider clientId='1053050806046-t1ne3ogj3jf5qupfk9heaahia06mih75.apps.googleusercontent.com'>
        <UserProvider>
          <RouterProvider router={router}/>
        </UserProvider>
      </GoogleOAuthProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
