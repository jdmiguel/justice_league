import React, { Component } from 'react';
import Logo from '../components/Intro/Logo';

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
        <Logo />
      </div>
    );
  }
}

export default Intro;
