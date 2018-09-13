import React, { Component } from 'react';
import Characters from '../components/Intro/Characters';
import { introLogoIntro, introLettersIntro } from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    const letters = document.querySelectorAll('.letter_intro');
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
