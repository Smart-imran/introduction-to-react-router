import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><h2>Hello World</h2></div>
  },

  {
    path: '/about',
    element: <div><h2>This is about page</h2></div>
  },
  {
    path: '/contact',
    element: <div><h2>This is contact page</h2></div>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
