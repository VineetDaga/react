import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
//header --> outlet --> footer 
// this shows that header and footer will remain constant and rest all cpmonents ae dynamically changed