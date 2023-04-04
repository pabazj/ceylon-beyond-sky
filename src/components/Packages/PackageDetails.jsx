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

const getPackageDetailsComponent = (packageId) => {
    
    switch (packageId) {
        case 'adventure-tour':
          return <AdventureTour/>;
        case 'beach-tour':
          return <BeachTour/>;
        case 'family-tour':
          return <FamilyTour/>;
        case 'ayurveda-and-wellness':
          return <AyurvedaAndWellness/>;
          case 'buddhist-culture-and-classic':
          return <BuddhistCultureAndClassic/>;
        case 'wedding-and-honeymoon-tour':
          return <WeddingAndHoneymoonTour/>;
        case 'ramayana-tour':
          return <RamayanaTour/>;
        case 'whild-life-safari':
          return <WhildLifeSafari/>;
        default:
          return null;
      }
}

function PackageDetails() {

    const { packageId } = useParams("packageId");
    
    const packageDetailsComponent = getPackageDetailsComponent(packageId);

    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  return (
    <div className="package-detail-container">
        {/* <h1>{packageId}</h1> */}
      {packageDetailsComponent}
     
    </div>
  )
}

export default PackageDetails
