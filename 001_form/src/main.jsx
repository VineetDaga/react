import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Navbar from './components/Navbar';
import {RouterProvider ,createBrowserRouter} from "react-router-dom"
import Layout from './Layout';
import AboutSection from './components/AboutSection';
import Temp from './components/Temp';
import Showalert from './Showalert';

const router = createBrowserRouter([
  {
    path :"/",
    element : <Layout />,
    children :[
      {
        path : "/",
        element :<Temp showalert={Showalert}/>
      },
      {
        path : "/about",
        element : <AboutSection showalert={Showalert} />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
