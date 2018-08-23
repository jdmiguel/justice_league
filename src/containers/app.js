import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from '../hoc/Wrapper';
import Router from '../router';
import Logo from '../components/Logo';

const App = () => (
  <Wrapper>
    <Logo />
    <Router />
  </Wrapper>
);

export default hot(module)(App);
