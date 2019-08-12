import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';

import App from './app';

// Server must expose CORS headers for XHR preload.
const imgs = [
  '../assets/aquaman_bg.jpg',
  '../assets/batman_bg.jpg',
  '../assets/cyborg_bg.jpg',
  '../assets/flash_bg.jpg'
];

if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('./service-worker.js').then(
    () => {
      console.log('CLIENT: service worker registration complete.');
    },
    () => {
      console.log('CLIENT: service worker registration failure.');
    }
  );
} else {
  console.log('CLIENT: service worker is not supported.');
}

ReactDOM.render(<App />, document.getElementById('app'));
