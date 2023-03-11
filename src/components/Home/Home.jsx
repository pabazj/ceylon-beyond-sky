import React from 'react';
import './home.css';
import Waves from '../../assets/waves.mp4'

function Home() {
  return (
    <div className='home_container' name="home">
      <video src={Waves} loop autoPlay muted></video>
      <div className="overlay"></div>
      <div className='content_container'>
        <h3>Discover Sri Lanka</h3>
        <h4>Take a break & Relax</h4>
      </div>
    </div>
  )
}

export default Home
