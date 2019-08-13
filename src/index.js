import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';

import App from './app';

// if ('serviceWorker' in navigator) {
// console.log('CLIENT: service worker registration in progress.');
// navigator.serviceWorker.register('./service-worker.js').then(
// () => {
// console.log('CLIENT: service worker registration complete.');
// },
// () => {
// console.log('CLIENT: service worker registration failure.');
// }
// );
// } else {
// console.log('CLIENT: service worker is not supported.');
// }

ReactDOM.render(<App />, document.getElementById('app'));
