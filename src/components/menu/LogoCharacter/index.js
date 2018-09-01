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
      inDirection,
      isActiveOverMenuLetters,
      isActiveMenuLettersAnimation
    } = this.props;

    if (prevProps.isActiveOverMenuLetters !== isActiveOverMenuLetters) return;
    if (isActiveMenuLettersAnimation) this.animate('in');
    else this.animate('out');

    if (inDirection === 'left') {
      console.log('go morph');
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
    return (
      <div className="superheroLogo_container">
        <svg
          id="supermanLogo"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enableBackground="new 0 0 500 500"
          className="superheroLogo_svg"
          xmlSpace="preserve"
        >
          <path
            fill="#0e88f0"
            fillOpacity="0.5"
            d="M23.035,215.585L5.974,195.771C15.941,150.645,38.088,110,68.81,78h32.491
            C19.482,117,18.296,184.122,23.035,215.585z M355.843,292.967c-26.194-11.388-103.541-17.049-205.963-20.471
            c-48.185-1.646-75.961-9.282-91.892-16.918l63.06,72.803c6.846-8.359,22.25-18.3,57.268-18.3c60.297,0,64.837,29.557,64.837,29.557
            c50.093,4.54,84.258-2.238,105.847-7.965C370.59,325.946,381.979,304.354,355.843,292.967z M168.31,382.948l81.689,94.261
            l81.229-93.799C257.37,399.402,199.445,390.782,168.31,382.948z M444.773,252.417l49.357-57.078
            c-6.665-30.06-18.739-58.014-35.152-82.929L455.9,160h-97.883c-6.846-42-48.906-66.088-48.906-66.088
            c-17.773-9.217-35.744-14.185-52.792-16.424c-17.773-2.37-34.56-1.794-48.908-0.017c-28.175,3.554-47.33,11.841-47.33,11.841
            c-77.344,38.64-37.519,64.833-37.519,64.833c68.327,47.789,186.613,17.047,249.212,36.399
            C416.472,204.435,436.811,235.698,444.773,252.417z M398.291,48c-41.475-30-92.73-48.673-148.218-48.673
            C194.586-0.673,143.331,18,101.855,48H398.291z M269.743,498.922c128.876-10.031,230.33-117.781,230.33-249.232
            c0-5.368-0.189-10.691-0.522-15.976L269.743,498.922z M390.336,77.454l4.15-6.454h-48.844l6.386,6.454l23.171,23.169L390.336,77.454
            z M0.586,233.872c-0.327,5.232-0.513,10.503-0.513,15.818c0,131.396,101.37,239.109,230.17,249.218L0.586,233.872z"
          />
        </svg>
        <svg
          id="batmanLogo"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enableBackground="new 0 0 500 500"
          className="superheroLogo_svg"
          xmlSpace="preserve"
        >
          <path
            fill="#282828"
            fillOpacity="0.5"
            d="M489.229,176.678c7.043,23.098,10.844,47.609,10.844,73.011c0,138.071-111.929,250-250,250
            s-250-111.929-250-250c0-24.563,3.559-48.292,10.161-70.717c6.769,4.433,13.144,9.373,18.86,15.127
            c15.34,15.44,21.73,34.081,19.505,55.617c-0.579,5.596-2.113,11.093-3.234,16.742c-0.037,0.003-0.074,0.005-0.111,0.008
            c-0.013,0.001-0.024-0.003-0.037-0.005c-0.103-0.039-0.065-0.011,0,0c0.032,0.012,0.07,0.026,0.136,0.057
            c0.004-0.02,0.008-0.039,0.012-0.06c3.603-0.235,7.204-0.517,10.811-0.719c25.862-1.424,51.706-1.601,77.486,1.449
            c14.974,1.771,29.74,4.56,43.989,9.599c29.512,10.43,50.818,29.853,63.206,58.669c2.986,6.948,4.937,14.336,7.273,21.252
            c0.147-0.586,0.411-1.621,0.661-2.659c4.504-18.823,12.561-35.797,25.851-50.1c15.507-16.687,34.996-26.076,56.792-31.386
            c16.863-4.105,33.993-6.245,51.275-7.171c21.441-1.152,42.881-0.789,64.298,0.873c1.451,0.111,2.912,0.159,4.599,0.248
            c-0.343-0.943-0.594-1.656-0.86-2.364c-2.843-7.549-4.61-15.329-4.747-23.408c-0.27-16.177,5.725-29.979,16.311-41.924
            C470.165,189.959,479.35,182.849,489.229,176.678z M151.536,148.387c4.111,0,5.593,1.262,6.522,5.513
            c1.73,7.905,3.987,15.619,7.904,22.765c2.263,4.125,5.367,7.256,9.845,8.979c13.42,5.168,27.167,8.711,41.668,8.596
            c5.365-0.043,6.984-0.847,8.257-6.098c1.562-6.441,2.701-13.029,3.39-19.623c0.856-8.202,1.065-16.475,1.583-25.226
            c2.879,11.095,5.652,21.777,8.477,32.659c5.927-1.571,11.621-1.598,17.624,0.007c2.72-10.84,5.405-21.531,8.09-32.225
            c0.228,0.01,0.454,0.021,0.683,0.03c0,3.206-0.119,6.415,0.019,9.616c0.455,10.556,0.926,21.136,3.513,31.435
            c2.681,10.656,4.629,9.693,12.193,9.334c13.398-0.636,26.299-3.798,38.854-8.46c4.576-1.697,7.732-4.86,10.033-9.037
            c3.807-6.911,5.98-14.39,7.763-22.014c0.288-1.238,0.636-2.485,1.15-3.642c0.704-1.585,2.046-2.413,3.789-2.53
            c0.826-0.056,1.661-0.08,2.493-0.08c44.431-0.003,88.861-0.002,133.292-0.003C439.804,60.79,352.08-0.311,250.073-0.311
            c-102.01,0-189.736,61.104-228.609,148.701C64.821,148.388,108.179,148.384,151.536,148.387z"
          />
        </svg>
      </div>
    );
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
