import React, { Component } from 'react';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0.8,
      delay: 4
    };
  }

  componentDidMount() {
    const { duration, delay } = this.state;
    TweenMax.from('.background', duration, {
      delay,
      y: '100%',
      ease: Cubic.easeOut
    });
  }

  render() {
    return <div className="background" />;
  }
}

export default Background;
