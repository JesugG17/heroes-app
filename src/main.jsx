import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';


import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HeroesApp />
  </React.StrictMode>,
);
