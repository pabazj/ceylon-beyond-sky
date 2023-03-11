import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import Cycling from './Cycling';
import WaterSports from './WaterSports';
import HotAirballooning from './HotAirballooning';
import Camping from './Camping';
import './activities.css'

const getActivityDetailsComponent = (id) => {
    
    switch (id) {
        case 'Cycling':
          return <Cycling/>;
        case 'WaterSports':
          return <WaterSports/>;
        case 'HotAirballooning':
          return <HotAirballooning/>;
        case 'Camping':
          return <Camping/>;
        default:
          return null;
      }
}

function ActivityDetails() {
    const { id } = useParams();
    const activityDetailsComponent = getActivityDetailsComponent(id);

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  
    return (
        <div className="activity-detail-container">
            
        <div><button onClick={goBack}>Go Back</button></div>
          {/* <h1>{id}</h1> */}
          {activityDetailsComponent}
        </div>
      );
}

export default ActivityDetails
