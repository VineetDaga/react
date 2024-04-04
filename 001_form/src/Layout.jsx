import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
import DismissalAlert from './components/DismissalAlert';
// import Showalert from './Showalert';



function Layout() {

  return (
    <>
    <Navbar />
    <DismissalAlert alert={alert}></DismissalAlert>
    <Outlet />
    </>
  )
}

export default Layout