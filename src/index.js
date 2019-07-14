import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './scss/styles.scss';

import App from './app';

const { registerObserver } = require('react-perf-devtool');

registerObserver();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
