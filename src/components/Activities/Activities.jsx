import React from 'react'
import './activities.css'
import { activityList } from '../../Data';

import { Link } from "react-router-dom";


function Activities() {
  return (
    <section name='activities'>

      <h2>Activities</h2>

      <div className="activity-container">
        {activityList.map(item => (
          <div className="container" key={item.id}>
            <img src={item.image} alt="Avatar" className="image" />
            <Link to={`/activity/${item.title.replace(/\s/g, '')}`} ><div className="overlay"><p>{item.title}</p></div></Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities
