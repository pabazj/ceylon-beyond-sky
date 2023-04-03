import React from 'react'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Packages from './Packages/Packages';
import Activities from './Activities/Activities';
import About from './About/About';
import Destinations from './Destinations/Destinations'
import Footer from './Footer/Footer'
import { Outlet } from "react-router-dom";


function Main() {
  return (
    <>
    <Outlet />
    <Home/>
    <Activities/>
    <Packages/>
    <Destinations/>
    <Footer/>
    </>
  )
}

export default Main
