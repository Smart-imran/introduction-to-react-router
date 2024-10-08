import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Home from './components/Home/Home.jsx';
import Abouts from './components/Abouts/Abouts.jsx';
import Contact from './components/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <Abouts></Abouts>
      },

      {
        path:'/contact',
        element:<Contact></Contact>
      },

      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },

    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
