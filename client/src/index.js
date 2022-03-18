import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7b0b2vm7.us.auth0.com"
      clientId="KOVGO6unnTMztPX5DSBUFsghlogodAPm"
      redirectUri={window.location.origin}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

