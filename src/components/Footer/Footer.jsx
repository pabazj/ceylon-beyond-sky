import React from 'react'
import './footer.css'
import {SiFacebook, SiInstagram, SiTripadvisor, SiWhatsapp} from 'react-icons/si';
import {MdWifiCalling1, MdEmail} from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';

import So from '../../assets/Logos/So.png'
import STDA from '../../assets/Logos/STDA1.png'
import STPB from '../../assets/Logos/STPB1.png'


function Footer() {
  return (
    <div className="footer-container">
<footer>
<div className="image-row">
  <a href='https://www.srilanka.travel/' target='_blank'><img src={So} alt="Image 1"/></a>
  <a href='https://www.sltda.gov.lk/en' target='_blank'><img src={STDA} alt="Image 2"/></a>
  <a href='https://meetinsrilanka.com/logo/sri-lanka-tourism-promotion-bureau-sltpb/' target='_blank'><img src={STPB} alt="Image 3"/></a>
</div>
  <div className="ft-main">
    <div className="ft-main-item">
      <h2 className="ft-title"> <FaMapMarkedAlt className='icon-style'/> <span>Contact location</span></h2>
      <div>
      <p>34 B 1/1 , Soma Devi Place, </p>
      <p>Kirulapone , Colombo 05 </p>
      <p>Sri Lanka</p>

      <br/>
      <p>269/1 Kohilegedara, </p>
      <p>Kurunegala, Sri Lanka</p>
      </div>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title"><MdWifiCalling1 className='icon-style'/><span> Contact Us </span></h2>
      <p>+94 71 998 8108</p>
      <br/>
      <p>+94 71 396 0988</p>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title"><MdEmail className='icon-style'/><span>Email Us </span></h2>
     <p>ceylonbeyondsky@gmail.com</p>
    </div>
  </div>

  <div className="ft-social">
    <ul className="ft-social-list">
      <li><a  href='https://www.facebook.com/people/Ceylon-Beyond-Sky-Tours/100089761681729/?mibextid=LQQJ4d' target='_blank'><SiFacebook/></a></li>
      {/* <li><a href="#"><SiInstagram/></a></li> */}
      <li><a href="https://en.tripadvisor.com.hk/Attraction_Review-g668534-d25267725-Reviews-Ceylon_Beyond_sky_Tours-Kurunegala_North_Western_Province.html" target='_blank'><SiTripadvisor/></a></li>
      <li><a href="tel:+94 71 998 8108"><MdWifiCalling1/></a></li>
      <li><a href="https://wa.me/+94713960988"><SiWhatsapp/></a></li>
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
