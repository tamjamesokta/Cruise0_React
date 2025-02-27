import React from 'react';
import './RecommendedDestinations.css';

const destinations = [
  { id: 1, name: 'Caribbean', image: '/path-to-caribbean.jpg' },
  { id: 2, name: 'Mediterranean', image: '/path-to-mediterranean.jpg' },
  { id: 3, name: 'Alaska', image: '/path-to-alaska.jpg' },
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
