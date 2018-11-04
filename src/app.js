import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from './hoc/Wrapper';
import Router from './router';
import LogoDC from './components/HeaderLogo/logoDC';
import LogoJL from './components/HeaderLogo/logoJL';
import Lansdcape from './components/Landscape';

const App = () => (
  <Wrapper>
    <Lansdcape />
    <LogoDC />
    <LogoJL />
    <Router />
  </Wrapper>
);

export default hot(module)(App);
