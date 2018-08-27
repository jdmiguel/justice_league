import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

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
        '.supermanLogo_svg',
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
        '.supermanLogo_svg path',
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
        '.supermanLogo_svg path',
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
        '.supermanLogo_svg path',
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
    // console.log(`prevProps: ${prevProps.isActiveOverMenuLetters}`);
    // console.log(`this.props: ${this.props.isActiveOverMenuLetters}`);
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
    return (
      <div className="supermanLogo_container">
        <svg
          width="450"
          height="400"
          className="supermanLogo_svg"
          viewBox="195 300 1000 700"
          xmlSpace="preserve"
        >
          <path
            fill="#c80000"
            fillOpacity="0.5"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeMiterlimit="10"
            d="M879,550.4c-95.1-29.4-274.8,17.3-378.6-55.3
         c0,0-60.5-39.8,57-98.5c0,0,29.1-12.6,71.9-18c21.8-2.7,47.3-3.6,74.3,0c25.9,3.4,53.2,10.9,80.2,24.9c0,0,63.9,36.3,74.3,100.3
         h148.7l7-108.1l102,103.1L989.9,644.4C977.8,619,946.9,571.5,879,550.4L879,550.4z M844.4,764.8c-32.8,8.7-84.7,19-160.8,12.1
         c0,0-6.9-44.9-98.5-44.9c-53.2,0-76.6,15.1-87,27.8l-95.8-110.6c24.2,11.6,66.4,23.2,139.6,25.7c155.6,5.2,273.1,13.8,312.9,31.1
         C894.5,723.3,877.2,756.1,844.4,764.8L844.4,764.8z M694,985.9L569.9,842.7c47.3,11.9,135.3,25,247.5,0.7L694,985.9z M272.1,498.9
         L391,378.7h77.1C343.8,439,342,540.1,349.2,587.9L272.1,498.9z M913.5,369l-6.3,9.7l-23,35.2l-35.2-35.2l-9.7-9.7H913.5z
          M1015.5,334.4h-643L211.7,496.9L694,1053.5l482.3-556.6L1015.5,334.4"
          />
        </svg>
      </div>
    );
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
