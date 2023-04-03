import React from 'react';
import './home.css';
import Waves from '../../assets/waves.mp4'

function Home() {
  return (
    // <div className='home_container' name="home">
    //   <video src={Waves} loop autoPlay muted></video>
    //   <div className="overlay"></div>
    //   <div className='content_container'>
    //     <h3>Discover Sri Lanka</h3>
    //     <h4>Take a break & Relax</h4>
    //   </div>
     
    // </div>
    <section className="background jumbotron" id="jumbotron">
	  		<div className="container">
	    		<h1>explore <br/></h1>
	    		<p>the best destination for tourists in the world.</p>
	  		</div>
		</section>
  )
}

export default Home
