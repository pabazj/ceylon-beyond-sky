import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Packages from './components/Packages/Packages';
import Activities from './components/Activities/Activities';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations'
import DestinationDetils from './components/Destinations/DestinationDetils';
import ActivityDetails from './components/Activities/ActivityDetails'
import PackageDetails from './components/Packages/PackageDetails'

import { BrowserRouter   as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utill/ScrollToTop';
import NavBar from './components/Navbar/Navbar';

import GoToTop from './utill/GoToTop'

import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
   <>
      {/* <Router> */}
      {/* <ScrollToTop/> */}
      <header>
      <Navbar/>
      </header>
     
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route  path="/about" element={<About />} />
        <Route path="packages/:packageId" element={<PackageDetails />} />
        <Route  path="activities/:activityId" element={<ActivityDetails />} />
        <Route  path="destinations/:destinationId" element={<DestinationDetils />} />
        <Route  path="/contact" element={<Contact />} />
      </Routes>
    {/* </Router> */}
    <Footer/>
   </>
  );
}

export default App;
