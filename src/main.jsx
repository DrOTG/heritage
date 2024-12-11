import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-dark-purple/theme.css"
import 'primeicons/primeicons.css'
import { PrimeReactProvider } from 'primereact/api'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  </React.StrictMode>,
)
