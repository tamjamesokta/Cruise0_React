import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import baliImage from '../images/bali.jpg';
import caribbeanImage from '../images/caribbean.jpg';
import mediImage from '../images/medi.jpg'

const images = [baliImage, caribbeanImage, mediImage];

function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <img src={images[currentImage]} alt="Travel Destination" />
      <div className="landing-page-content">

      
      </div>
    </div>
  );
}

export default LandingPage;