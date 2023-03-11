import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Packages from './components/Packages/Packages';
import Activities from './components/Activities/Activities';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations'
import DestinationDetils from './components/Destinations/DestinationDetils';
import ActivityDetails from './components/Activities/ActivityDetails'
import PackageDetails from './components/Packages/PackageDetails'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
      
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/package/:id" element={<PackageDetails/>} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/destinations/:id" element={<DestinationDetils />} />
      </Routes>
    </Router>

   </>
  );
}

export default App;
