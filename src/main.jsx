import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "primereact/resources/themes/lara-dark-purple/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { UserProvider } from './context.jsx';
import Home from './pages/Home.jsx'; // Import Home component for main page sections
import Pricing from './pages/Pricing.jsx'; // Pricing component
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import RequireLogin from './components/RequireLogin.jsx';
import Subscribe from './pages/Subscribe.jsx';
import AdminRoot from './pages/admin/AdminRoot.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Main page sections (Home, About, Contact)
      },
      {
        path: "pricing",
        element: <Pricing />, // Dedicated Pricing page
      },
      {
        path:"subscribe/:id",
        element:<RequireLogin><Subscribe /></RequireLogin>
      },
      {
        path:"login",
        element: <Login />
      },
      {
        path:"profile",
        element:<RequireLogin><Profile /></RequireLogin>
      }
      
    ],
  },
  {
    path:"/admin",
    element: <AdminRoot />,
    children: [
      {
        path:"",
        element: <AdminDashboard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
