import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home';
import Contract from './Components/Contract/Contract.jsx';
import About from './Components/About/About';
import Header from './Components/Header/Header.jsx';
import User from './Components/User/User';
import UserDetails from './Components/UserDetails/UserDetails';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element:<About></About>
      } ,
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      } ,
      {
        path:'/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },

      {
        path:'/contract',
        element: <Contract></Contract>
      }
    ]
  },
  {
    path:"header",
    element: <Header></Header>
  }
  // {
  //   path: "/contract",
  //   element: <div>I am in the contract page</div>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
