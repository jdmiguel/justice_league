import React from 'react';
import { hot } from 'react-hot-loader';
import Router from './router';
import LogoDC from './components/HeaderLogo/logoDC';
import LogoJL from './components/HeaderLogo/logoJL';
import Lansdcape from './components/Landscape';

const App = () => (
  <div className="app">
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <Router />
  </div>
);

export default hot(module)(App);
