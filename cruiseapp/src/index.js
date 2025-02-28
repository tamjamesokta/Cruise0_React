import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

fetch('https://raw.githubusercontent.com/tamjamesokta/Cruise0_React/main/manifest.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    console.log('Manifest data:', data); // You can now work with the data here
    // For example, if you're setting the manifest data somewhere in your app
  })
  .catch(error => console.error('Error fetching manifest:', error));

reportWebVitals();

