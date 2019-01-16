import React, { Fragment } from 'react';
import Lansdcape from './components/Landscape';
import LogoDC from './components/Logos/LogoDC';
import LogoJL from './components/Logos/LogoJL';
import LogoGithub from './components/Logos/LogoGithub';
import Intro from './components/Intro';
import Menu from './containers/menu';
import Character from './containers/character';

const App = () => (
  <Fragment>
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <LogoGithub />
    <Intro />
    <Menu />
    <Character />
  </Fragment>
);

export default App;
