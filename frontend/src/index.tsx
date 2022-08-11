import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
