import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import axios from "axios";
import store from './Redux/Store.js';
import './variables.css';

// Configuración de la baseURL para Axios:
axios.defaults.baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost:3001"
  : process.env.REACT_APP_API;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
