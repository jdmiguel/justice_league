import React, { Component } from 'react';

/** Components */
import Logo from './IntroLogoDC';
import Letters from './IntroLettersJL';

/** Utils */
import {
  introLogoIntro,
  introLettersIntro,
  outIntro
} from '../../utils/animations';
import {
  svgLogoDcRef,
  pathLogoDcRef,
  introContainerRef,
  pathsJLRef
} from '../../utils/literals';

export default () => (
  <div className="intro_container">
    <Logo />
    <Letters />
  </div>
);
