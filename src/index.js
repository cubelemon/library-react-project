import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
//Importing the whole library of the font awesome svg files
import { faBars, faShoppingCart, faTimes, faBookOpen, faTag, faBolt, faStar, faStarHalfStroke  } from '@fortawesome/free-solid-svg-icons';
//importing individual icons from the library of icons
library.add(faBars, faShoppingCart, faTimes,faBookOpen, faTag, faBolt, faStar, faStarHalfStroke )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
