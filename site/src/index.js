import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/common/common.scss';
import './index.css';

import Rotas from './routes.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
