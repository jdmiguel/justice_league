import React, { Component } from 'react';
import Logo from '../components/Intro/Logo';
import Letters from '../components/Intro/Letters';
import { introLogoIntro, introLettersIntro } from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    const logoSvg = document.querySelectorAll('.logo_svg_intro');
    const logoPath = document.querySelectorAll('.logo_path_intro');
    const letters = document.querySelectorAll('.letters_path_intro');

    const introLogoSvg = introLogoIntro(logoSvg);
    introLogoSvg(logoPath);

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
