import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';
import Cycling from './Cycling';
import WaterSports from './WaterSports';
import HotAirballooning from './HotAirballooning';
import Camping from './Camping';
import './activities.css'

const getActivityDetailsComponent = (activityId) => {
    
    switch (activityId) {
        case 'cycling':
          return <Cycling/>;
        case 'water-sports':
          return <WaterSports/>;
        case 'hot-air-ballooning':
          return <HotAirballooning/>;
        case 'camping':
          return <Camping/>;
        default:
          return null;
      }
}

function ActivityDetails() {
    const { activityId } = useParams("activityId");
   
    const activityDetailsComponent = getActivityDetailsComponent(activityId);

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  
    return (
        <div className="activity-detail-container">
          {/* <h1>{activityId}</h1> */}
          {activityDetailsComponent}
        </div>
      );
}

export default ActivityDetails
