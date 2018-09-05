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
import { introLogoMenu } from '../../../utils/animations';

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
    const { activeOverMenuLetters } = this.props;
    const logoContainer = document.querySelector('.menuCharacters_logo');
    const logoSvg = logoContainer.querySelector('svg');
    const logoPath = logoSvg.querySelector('path');

    introLogoMenu(logoSvg)(logoPath);
    activeOverMenuLetters();
    // const { tl, duration, durationStroke, durationFill } = this.state;
    // const { activeOverMenuLetters } = this.props;
    // console.log(`isVisible: ${isVisible}`);
    /* tl.addLabel('initIntro')
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
        '.superheroLogo_path',
        durationStroke,
        {
          drawSVG: 0,
          ease: Power1.easeOut,
          onComplete: () => activeOverMenuLetters()
        },
        '-=6'
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

    tl.play('initIntro'); */
  }

  shouldComponentUpdate(nextProps) {
    const { superheroActive } = this.props;
    if (superheroActive !== nextProps.superheroActive) return true;
    return false;
  }

  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate from Logo');
    const {
      inDirection,
      isActiveOverMenuLetters,
      isActiveMenuLettersAnimation
    } = this.props;

    if (prevProps.isActiveOverMenuLetters !== isActiveOverMenuLetters) return;
    if (isActiveMenuLettersAnimation) this.animate('in');
    else this.animate('out');

    if (inDirection === 'left') {
      // console.log('go morph');
      TweenMax.to('#supermanLogo', 0.6, {
        scale: 0.7,
        autoAlpha: 0,
        rotationY: 120,
        ease: Cubic.easeIn
      });
      TweenMax.fromTo(
        '#batmanLogo',
        0.7,
        { scale: 0.8, autoAlpha: 0, rotationY: 120 },
        { delay: 0.5, scale: 1, autoAlpha: 1, rotationY: 0, ease: Back.easeOut }
      );
    }
  }

  animate(mode) {
    console.log(`animate: ${mode}`);
    const { tl } = this.state;
    if (mode === 'in') tl.play('initIn');
    else tl.play('initOut');
  }

  render() {
    const {
      superheroActive,
      superheroClass,
      isActiveMenuLettersAnimation
    } = this.props;

    const listClasses = ['menuCharacters_logo', `${superheroClass}`];

    if (superheroActive) listClasses.push('active');
    if (superheroActive && isActiveMenuLettersAnimation)
      listClasses.push('highlight');

    return <SupermanLogo classes={listClasses} />;
  }
}

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters,
  inDirection: state.lettersMenuRdc.inDirectionMenuLetters,
  outDirection: state.lettersMenuRdc.outDirectionMenuLetters
});

const mapDispatchToProps = dispatch => ({
  activeOverMenuLetters: () =>
    dispatch({ type: actionTypes.ACTIVE_OVER_MENU_LETTERS })
});

LogoCharacter.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  activeOverMenuLetters: PropTypes.func.isRequired,
  inDirection: PropTypes.string.isRequired,
  outDirection: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoCharacter);
