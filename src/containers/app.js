import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from '../hoc/Wrapper';
import Router from '../router';
import LogoDC from '../components/Logos/logoDC';
import LogoJL from '../components/Logos/logoJL';

const App = () => (
  <Wrapper>
    <LogoDC />
    <LogoJL />
    <Router />
  </Wrapper>
);

export default hot(module)(App);
