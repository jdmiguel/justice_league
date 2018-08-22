import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import DcLogo from '../components/dcLogo';
import Background from '../components/background';
import Letters from '../components/letters';
import SupermanLogo from '../components/superman/logo';

const App = () => (
  <div className="app_container">
    <DcLogo />
    <Background />
    <Letters />
    <SupermanLogo />
  </div>
);

export default hot(module)(App);
