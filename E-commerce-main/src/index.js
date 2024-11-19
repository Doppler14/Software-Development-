// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import input from './input.css'
import reportWebVitals from './reportWebVitals';
import CartProvider from './contexts/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
