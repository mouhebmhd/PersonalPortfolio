import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './views/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
    {/* 
    Services
    Contact
    Profile
    */}
  </React.StrictMode>
);

reportWebVitals();
