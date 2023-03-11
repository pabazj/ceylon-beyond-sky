import React from 'react'
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Packages from './Packages/Packages';
import Activities from './Activities/Activities';
import About from './About/About';
import Destinations from './Destinations/Destinations'

function Main() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Packages/>
    <Activities/>
    <Destinations/>
    </>
  )
}

export default Main
