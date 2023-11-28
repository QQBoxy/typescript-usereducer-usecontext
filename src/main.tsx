import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import StoreProvider from './store/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
