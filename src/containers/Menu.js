import React from 'react';
import Wrapper from '../hoc/Wrapper';
import Background from '../components/Menu/Background/Background';
import Letters from '../components/Menu/Letters/Letters';
import Logo from '../components/Menu/Logo/Logo';

const Menu = () => (
  <Wrapper>
    <Background />
    <Letters />
    <Logo />
  </Wrapper>
);

export default Menu;
