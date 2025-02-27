import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import BookingSystem from './components/BookingSystem';
import RecommendedDestinations from './components/RecommendedDestinations';
import './App.css';

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <BookingSystem />
      <RecommendedDestinations />
    </div>
  );
}

export default App;
