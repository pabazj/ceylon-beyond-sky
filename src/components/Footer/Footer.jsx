import React from 'react'
import './footer.css'
import {SiFacebook, SiInstagram, SiTripadvisor} from 'react-icons/si';
import {MdWifiCalling1, MdEmail} from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer-container">
<footer>
  <div className="ft-main">
    <div className="ft-main-item">
      <h2 className="ft-title"> <FaMapMarkedAlt/> Us</h2>
      <div>
      <p>34 B 1/1 , Soma Devi Place, </p>
      {/* <p>Soma Devi Place, </p> */}
      <p>Kirulapone , Colombo 05 </p>
      <p>Sri Lanka</p>
      </div>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title"><MdWifiCalling1/> Us</h2>
      <p>+94 71 998 8108</p>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title"><MdEmail/> Us</h2>
     <p>ceylonbeyondsky@gmail.com</p>
    </div>
  </div>

  <div className="ft-social">
    <ul className="ft-social-list">
      <li><a  href='https://www.facebook.com/people/Ceylon-Beyond-Sky-Tours/100089761681729/?mibextid=LQQJ4d' target='_blank'><SiFacebook/></a></li>
      <li><a href="#"><SiInstagram/></a></li>
      <li><a href="https://en.tripadvisor.com.hk/Attraction_Review-g668534-d25267725-Reviews-Ceylon_Beyond_sky_Tours-Kurunegala_North_Western_Province.html" target='_blank'><SiTripadvisor/></a></li>
      <li><a href="tel:+94 71 998 8108"><MdWifiCalling1/></a></li>
    </ul>
  </div>


  <div className="ft-legal">
    <p>&copy; 2023 Copyright Ceylon Beyond sky Tours.</p>
  </div>
</footer>
</div>
  )
}

export default Footer
