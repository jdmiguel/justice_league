import React, { Component } from 'react';
import Logo from '../components/Intro/Logo';
import Letters from '../components/Intro/Letters';
import {
  introLogoIntro,
  introLettersIntro,
  outIntro
} from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    const introContainer = document.querySelector('.intro_container');
    const logoSvg = document.querySelector('.logo_svg_intro');
    const logoPath = document.querySelector('.logo_path_intro');
    const letters = document.querySelectorAll('.letters_path_intro');

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
