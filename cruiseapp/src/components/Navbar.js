// Navbar.js remains the same as before
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';
import cruiseLogo from '../images/cruiselogo.jpg';




function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={cruiseLogo} alt="Cruise Logo" style={{ width: '75px', height: 'auto' }} />
        <h1 className="navbar-title">Cruise0</h1>
      </div>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log in</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
