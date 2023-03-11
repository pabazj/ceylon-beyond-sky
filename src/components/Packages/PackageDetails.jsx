import React from 'react'
import { useParams, useNavigate  } from 'react-router-dom';

import AdventureTour from './AdventureTour'
import BeachTour from './BeachTour'
import FamilyTour from './FamilyTour'
import AyurvedaAndWellness from './AyurvedaAndWellness'
import BuddhistCultureAndClassic from './BuddhistCultureAndClassic'
import WeddingAndHoneymoonTour from './WeddingAndHoneymoonTour'
import RamayanaTour from './RamayanaTour'
import WhildLifeSafari from './WhildLifeSafari'

const getPackageDetailsComponent = (id) => {
    
    switch (id) {
        case 'AdventureTour':
          return <AdventureTour/>;
        case 'BeachTour':
          return <BeachTour/>;
        case 'FamilyTour':
          return <FamilyTour/>;
        case 'AyurvedaAndWellness':
          return <AyurvedaAndWellness/>;
          case 'BuddhistCultureAndClassic':
          return <BuddhistCultureAndClassic/>;
        case 'WeddingAndHoneymoonTour':
          return <WeddingAndHoneymoonTour/>;
        case 'RamayanaTour':
          return <RamayanaTour/>;
        case 'WhildLifeSafari':
          return <WhildLifeSafari/>;
        default:
          return null;
      }
}

function PackageDetails() {


    const { id } = useParams();
    const packageDetailsComponent = getPackageDetailsComponent(id);

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  return (
    <div className="activity-detail-container">
            
    <div><button onClick={goBack}>Go Back</button></div>
      {packageDetailsComponent}
    </div>
  )
}

export default PackageDetails
