import React from 'react';
import { hot } from 'react-hot-loader';
import Wrapper from '../hoc/Wrapper';
import Intro from './Intro';
import Logo from '../components/Logo';
import Menu from './Menu';

const App = () => (
  <Wrapper>
    <Intro />
    <Logo />
    <Menu />
  </Wrapper>
);

export default hot(module)(App);
