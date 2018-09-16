import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from '../hoc/Wrapper';
import Router from '../router';
import LogoDC from '../components/Logos/logoDC';

const App = () => (
  <Wrapper>
    <LogoDC />
    <Router />
  </Wrapper>
);

export default hot(module)(App);
