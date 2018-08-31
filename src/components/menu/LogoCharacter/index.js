import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import SupermanLogo from './SupermanLogo';
import BatmanLogo from './BatmanLogo';
import WonderWomanLogo from './WonderWomanLogo';
import FlashLogo from './FlashLogo';
import GreenLanternLogo from './GreenLanternLogo';
import GreenArrowLogo from './GreenArrowLogo';
import AquamanLogo from './AquamanLogo';
import CyborgLogo from './CyborgLogo';

class LogoCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ paused: true }),
      duration: 0.55,
      durationStroke: 6.5,
      durationFill: 3
    };
  }

  componentDidMount() {
    const { tl, duration, durationStroke, durationFill } = this.state;
    const { activeOverMenuLetters } = this.props;

    // console.log(`isVisible: ${isVisible}`);

    tl.addLabel('initIntro')
      .fromTo(
        '.superheroLogo_svg',
        durationFill,
        {
          alpha: 0,
          scale: 0.5
        },
        {
          alpha: 1,
          scale: 1,
          ease: Power1.easeInOut
        },
        '+=3.5'
      )
      .to(
        '.superheroLogo_svg path',
        durationStroke,
        {
          drawSVG: 0,
          fillOpacity: 0.5,
          ease: Power1.easeOut,
          onComplete: () => activeOverMenuLetters()
        },
        '-=6.5'
      )
      .addPause()
      .addLabel('initIn')
      .to(
        '.superheroLogo_svg path',
        duration,
        {
          fillOpacity: 0.8,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause()
      .addLabel('initOut')
      .to(
        '.superheroLogo_svg path',
        duration,
        {
          fillOpacity: 0.5,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause();

    tl.play('initIntro');
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate from Logo');
    const {
      isActiveOverMenuLetters,
      isActiveMenuLettersAnimation
    } = this.props;

    if (prevProps.isActiveOverMenuLetters !== isActiveOverMenuLetters) return;
    if (isActiveMenuLettersAnimation) this.animate('in');
    else this.animate('out');
  }

  animate(mode) {
    console.log(`animate: ${mode}`);
    const { tl } = this.state;
    if (mode === 'in') tl.play('initIn');
    else tl.play('initOut');
  }

  render() {
    return <WonderWomanLogo />;
  }
}

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  activeOverMenuLetters: () =>
    dispatch({ type: actionTypes.ACTIVE_OVER_MENU_LETTERS })
});

LogoCharacter.propTypes = {
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  activeOverMenuLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoCharacter);
