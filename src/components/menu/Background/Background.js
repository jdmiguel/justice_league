import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ paused: false }),
      durationInit: 5,
      duration: 0.55
    };
  }

  componentDidMount() {
    const { tl, durationInit, duration } = this.state;
    tl.addLabel('initIntro')
      .from(
        '.menuCharacters_background',
        durationInit,
        {
          alpha: 0,
          ease: Power1.easeInOut
        },
        '+=2.5'
      )
      .addPause()
      .addLabel('initIn')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.2,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause()
      .addLabel('initOut')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.1,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate from Background');
    const { isActiveMenuLettersAnimation } = this.props;

    if (isActiveMenuLettersAnimation) this.animate('in');
    else this.animate('out');
  }

  animate(mode) {
    const { tl } = this.state;
    if (mode === 'in') tl.play('initIn');
    else tl.play('initOut');
  }

  render() {
    return <div className="menuCharacters_background superman" />;
  }
}

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation
});

Background.propTypes = {
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Background);
