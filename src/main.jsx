import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path:"/addcoffee",
    element:<AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader : ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)

  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
