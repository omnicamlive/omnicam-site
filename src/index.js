import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main App component
import './index.css'; // Your main CSS file with Tailwind directives

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);