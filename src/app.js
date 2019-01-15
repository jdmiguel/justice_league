import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Router from './router';
import LogoDC from './components/HeaderLogo/LogoDC';
import LogoJL from './components/HeaderLogo/LogoJL';
import Lansdcape from './components/Landscape';

const App = () => (
  <Fragment>
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <Router />
  </Fragment>
);

export default hot(module)(App);
