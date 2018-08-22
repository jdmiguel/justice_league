import React from 'react';
import { hot } from 'react-hot-loader';
import Logo from '../components/Logo';
import LogoIntro from '../components/LogoIntro';
import Background from '../components/background';
import Letters from '../components/letters';
import SupermanLogo from '../components/superman/logo';

const App = () => (
  <div className="app_container">
    <Logo />
    <LogoIntro />
    <Background />
    <Letters />
    <SupermanLogo />
  </div>
);

export default hot(module)(App);
