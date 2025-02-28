import React from 'react';
import './RecommendedDestinations.css';
import baliImage from '../images/bali.jpg';
import caribbeanImage from '../images/caribbean.jpg';
import mediImage from '../images/medi.jpg'

const destinations = [
    { id: 1, name: 'Caribbean', image: caribbeanImage },
    { id: 2, name: 'Mediterranean', image: mediImage },
    { id: 3, name: 'Alaska', image: baliImage },
  ];

function RecommendedDestinations() {
  return (
    <div className="recommended-destinations">
      <h2>Recommended Destinations</h2>
      <div className="destination-list">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-item">
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedDestinations;
