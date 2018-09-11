import React, { Component } from 'react';
import Characters from '../components/Intro/Characters';
import { introLogoIntro, introLettersIntro } from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    /* const { duration, delay } = this.state;
    TweenMax.to('.intro_container', duration, {
      delay,
      y: '-100%',
      ease: Cubic.easeOut
    }); */
    const logo = document.querySelector('.logo_intro');
    const letters = document.querySelectorAll('.letter_intro');

    introLogoIntro(logo);
    introLettersIntro(letters);
  }

  render() {
    return (
      <div className="intro_container">
        <Characters />
      </div>
    );
  }
}

export default Intro;
