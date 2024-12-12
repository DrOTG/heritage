import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-dark-purple/theme.css"
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './pages/Login.jsx'
import { UserProvider } from './context.jsx'
import Profile from './pages/Profile.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"login",
        element: <Login />
      },
      {
        path:"profile",
        element:<Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <UserProvider>
        <GoogleOAuthProvider clientId='1053050806046-t1ne3ogj3jf5qupfk9heaahia06mih75.apps.googleusercontent.com'>
          <RouterProvider router={router}/>
        </GoogleOAuthProvider>
      </UserProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
