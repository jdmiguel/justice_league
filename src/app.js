import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Router from './router';
import LogoDC from './components/Logos/LogoDC';
import LogoJL from './components/Logos/LogoJL';
import LogoGithub from './components/Logos/LogoGithub';
import Lansdcape from './components/Landscape';

const App = () => (
  <Fragment>
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <LogoGithub />
    <Router />
  </Fragment>
);

export default hot(module)(App);
