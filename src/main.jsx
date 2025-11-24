import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Route from './components/Route/Route.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={Route} />
   </AuthProvider>
  </React.StrictMode>,
)
