import './index.css';
import React from 'react';
import Navbar from './components/NavBar';
import HealthCare from './components/HealthCare';
import Services from './components/Services';
import HealthCareProvider from './components/HealthCareProvider';
import DownloadApp from './components/DownloadApp'
import Customer from './components/Customer';
import LatestArticle from './components/LatestArticle';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     
      <Navbar />
      <HealthCare/>
      <Services/>
      <HealthCareProvider/>
      <DownloadApp/>
       <Customer/>
       <LatestArticle/>
       <Footer/> 

     
    </div>
  );
}

export default App;
