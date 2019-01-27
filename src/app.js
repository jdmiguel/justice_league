import React, { Fragment } from 'react';
import Lansdcape from './components/Landscape';
import GithubCorner from './components/GithubCorner';
import LogoJL from './components/LogoJL';
import Intro from './components/Intro';
import Menu from './containers/menu';
import Character from './containers/character';

const App = () => (
  <Fragment>
    <Lansdcape />
    <GithubCorner />
    <LogoJL />
    <Intro />
    <Character />
  </Fragment>
);

export default App;
