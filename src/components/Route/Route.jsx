import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Register from '../../pages/Register/Register';

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
      }
      
    ]
  }
]);

export default Route