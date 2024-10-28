import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles
import App from './App'; // Import main App component

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

