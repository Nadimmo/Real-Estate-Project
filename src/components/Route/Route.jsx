import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Services from '../../pages/Services/Services';
import PropertyPage from '../../pages/PropertyPage/PropertyPage';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path:"/services",
        element: <Services/>
      },
      {
        path:"/property",
        element: <PropertyPage/>
      }
      
      
    ]
  }
]);

export default Route