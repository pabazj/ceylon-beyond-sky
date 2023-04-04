import React, {useEffect} from 'react'
import './destinations.css'

import { Link } from "react-router-dom";
import { destinationyList } from '../../Data';
import Surfing from '../../assets/Packages/beach/Surfing.jpg'
import DestinationDetils from './DestinationDetils'

function Destinations() {

  return (
    <section name="destinations">
      <h2>Destinations</h2>

      <div className="container_des">
        <img src={Surfing} alt="Notebook" style={{ width: '100%' }} />
        <div className="content">
          {/* <h2 >Travel Destinations</h2> */}
          <div className="grid-container">
            {destinationyList.map(item => (
              <p key={item.id} className="grid-item">
                <Link to={item.url} >
                  {item.title} <i className="arrow right">
                  </i>
                </Link>
              </p>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Destinations

