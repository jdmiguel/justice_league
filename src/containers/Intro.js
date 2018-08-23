import React, { Component } from 'react';
import LogoIntro from '../components/Intro/LogoIntro';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0.8,
      delay: 4
    };
  }

  componentDidMount() {
    const { duration, delay } = this.state;
    TweenMax.to('.intro_container', duration, {
      delay,
      y: '-100%',
      ease: Cubic.easeOut
    });
  }

  render() {
    return (
      <div className="intro_container">
        <LogoIntro />
      </div>
    );
  }
}

export default Intro;
