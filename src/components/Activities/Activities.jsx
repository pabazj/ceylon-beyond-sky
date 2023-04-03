import React from 'react'
import './activities.css'
import { activityList } from '../../Data';

import { Link } from "react-router-dom";
import {GiCycling } from 'react-icons/gi';
import { MdOutlineKayaking } from 'react-icons/md';
import {GiAirBalloon } from 'react-icons/gi';
import { GiCampingTent } from 'react-icons/gi';

const getActivityIcons = (icon) => {
    
  switch (icon) {
      case 'cycling':
        return <GiCycling/>;
      case 'kayaking':
        return <MdOutlineKayaking/>;
      case 'balloon':
        return <GiAirBalloon/>;
      case 'camping':
        return <GiCampingTent/>;
      default:
        return null;
    }
}


function Activities() {

  
  return (
    <section name='activities'>

      <h2>Activities</h2>

      <div className="activity-container">

        {activityList.map(item => (
          <div className="serviceBox"  key={item.id}>
            <div className="service-icon">
              <span> {getActivityIcons(item.icon) }</span>
            </div>
            <h3 className="title">{item.title}</h3>
            <p className="description">
             {item.description}
            </p>
            <Link to={item.url} ><button className='activity_button'>Explore More</button></Link>
          </div>
       ))}

      </div>
    </section>
  )
}

export default Activities
