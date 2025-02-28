import React, { useState } from 'react';

import './BookingSystem.css';

function BookingSystem() {
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking:', { destination, departureDate, passengers });
  };

  return (

        <div className="booking-system">
             
            <div className="booking-system-container">
            <h2 className="booking-title" style={{ marginRight: '15px' }}>Book Your Cruise</h2>
            
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination"
                    required
                    />
                    <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                    />
                    <input
                    type="number"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    placeholder="# of Passengers"
                    min="1"
                    required
                    />
                 
                    <button type="submit">Search Cruises</button>
                </form>
        </div>
        </div>
        
  );
}

export default BookingSystem;
