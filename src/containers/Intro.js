import React, { Component } from 'react';
import Logo from '../components/Intro/IntroLogoDC';
import Letters from '../components/Intro/IntroLettersJL';
import {
  introLogoIntro,
  introLettersIntro,
  outIntro
} from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    const introContainer = document.querySelector('.intro_container');
    const logoSvg = document.querySelector('.introLogoDC_svg');
    const logoPath = document.querySelector('.introLogoDC_path');
    const letters = document.querySelectorAll('.introLettersJL_path');

    const introLogoSvg = introLogoIntro(logoSvg);
    const fadeAwayLogoPath = introLogoSvg(logoPath);
    const addCallbackEndIntro = fadeAwayLogoPath(outIntro);
    addCallbackEndIntro(introContainer);

    introLettersIntro(letters);
  }

  render() {
    return (
      <div className="intro_container">
        <Logo />
        <Letters />
      </div>
    );
  }
}

export default Intro;
