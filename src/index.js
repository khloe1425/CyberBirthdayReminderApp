import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js'; //Jquery
import 'popper.js/dist/popper.min.js'; //Popper.js
import 'bootstrap/dist/js/bootstrap.min.js'; //Bootstrap JS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
