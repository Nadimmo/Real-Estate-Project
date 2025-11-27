import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import WeatherSearch from '../../pages/WeatherSearch/WeatherSearch';
import GlobalCareerGuide from '../../pages/GlobalCareerGuide/GlobalCareerGuide';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

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
        path:"/global-career-guide",
        element: <GlobalCareerGuide/>
      },
      {
        path:"/weather-search",
        element: <PrivateRoute><WeatherSearch/></PrivateRoute>
      }
      
      
    ]
  }
]);

export default Route