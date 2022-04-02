import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProvideAuth } from './context/auth.js';

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
