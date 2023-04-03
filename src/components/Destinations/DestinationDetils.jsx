import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { destinationyList } from '../../Data';
import './destinations.css'
import ScrollToTopButton from '../../utill/ScrollToTopButton'

function DestinationDetils() {

  const { destinationId } = useParams('destinationId');

  const destination = destinationyList.filter(item => item.title.replace(/\s+/g, '-').toLowerCase() === destinationId)[0]

  return (
    <article>
      <div className="destination-detail-container">
        <div className="destination_post_container">
          <h2>{destination.title}</h2>
          <div className="post">
            <p>{destination.paraOne}</p>
            <p >{destination.paraTwo}</p>
            <p >{destination.paraThree}</p>
            <div className='destination_image_container'>
            <figure><img src={destination.imageOne} alt="Any Image" /> </figure>
            <figure><img src={destination.imageTwo} alt="Any Image" /> </figure>
            </div>
           
          </div>

        </div>
      </div>
      <ScrollToTopButton />
    </article>
  )
}

export default DestinationDetils
