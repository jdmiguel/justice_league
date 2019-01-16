import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Lansdcape from './components/Landscape';
import LogoDC from './components/Logos/LogoDC';
import LogoJL from './components/Logos/LogoJL';
import LogoGithub from './components/Logos/LogoGithub';
import Menu from './containers/menu';
import Intro from './components/Intro';

const App = () => (
  <Fragment>
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <LogoGithub />
    <Intro />
    <Menu />
  </Fragment>
);

export default hot(module)(App);
