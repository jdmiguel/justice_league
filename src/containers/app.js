import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from '../hoc/Wrapper';
import Router from '../router';
import LogoDC from '../components/HeaderLogo/logoDC';
import LogoJL from '../components/HeaderLogo/logoJL';

const App = () => (
  <Wrapper>
    <LogoDC />
    <LogoJL />
    <Router />
  </Wrapper>
);

export default hot(module)(App);
