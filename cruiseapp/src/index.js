import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="james-test-43934.cic-demo-platform.auth0app.com"
      clientId="aDiRvzmJUWap1QPsWSe7LKpM0HC0pPbk"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

fetch('https://api.example.com/data', {
  method: 'GET', // or 'POST', 'PUT', etc.
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
    // Add any other necessary headers
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

