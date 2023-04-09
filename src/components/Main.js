import React from 'react'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Packages from './Packages/Packages';
import Activities from './Activities/Activities';
import About from './About/About';
import Destinations from './Destinations/Destinations'
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';


function Main() {
  return (
    <>
    {/* <header>
      <Navbar/>
      </header> */}
    <Outlet />
    <Home/>
    <Activities/>
    <Packages/>
    <Destinations/>
    {/* <Footer/> */}
    </>
  )
}

export default Main
