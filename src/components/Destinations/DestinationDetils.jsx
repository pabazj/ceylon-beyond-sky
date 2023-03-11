import React, {useEffect} from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { destinationyList } from '../../Data';
import './destinations.css'

function DestinationDetils() {

  const { id } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

const destination = destinationyList.filter(item=> item.title.replace(/\s/g, '') === id)[0]

  return (
    <div className="destination-detail-container">
     <div><button onClick={goBack}>Go Back</button></div>
    <article>
   
    <h2>{destination.title}</h2>
    <img className="left-side" src={destination.imageOne} alt="Any Image"/>
    <p>{destination.paraOne}</p>
    <img className="right-side" src={destination.imageTwo} alt="Any Image"/>
    <p>{destination.paraTwo}</p>
    <p>{destination.paraThree}</p>
    </article>
    </div>
  )
}

export default DestinationDetils
