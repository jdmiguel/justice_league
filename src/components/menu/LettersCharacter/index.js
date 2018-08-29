import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import { introLettersMenu, outLettersMenu } from '../../../utils/animations';

class LettersCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedLetters: null,
      activedLettersLength: 0,
      configLettersAnimations: {
        intro: {
          duration: 1.1,
          globalDelay: 5,
          staggerDelay: 0.08
        },
        outRightAnimation: {
          duration: 0.4,
          globalDelay: 0,
          staggerDelay: 0.01,
          xDistances: {
            global: 50,
            stagger: 40
          }
        }
      }
    };

    this.createSuperheroLetters = this.createSuperheroLetters.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { superheroActive } = this.props;
    const { configLettersAnimations } = this.state;
    const { intro } = configLettersAnimations;

    const createdLetters = this.createSuperheroLetters();

    if (superheroActive) introLettersMenu(createdLetters, intro);
    else TweenMax.set(createdLetters, { alpha: 0 });
  }

  componentDidUpdate() {}

  getDistance(index) {
    const { activedLettersLength } = this.state;
    const factor = activedLettersLength / 2;
    const distance =
      index < activedLettersLength / 2
        ? (Math.sin(index) - activedLettersLength) * (factor - index)
        : (Math.sin(index) + activedLettersLength) * (index - factor);

    return distance;
  }

  createSuperheroLetters() {
    const { superheroActive, superheroClass } = this.props;

    const mySplitText = new SplitText(`.${superheroClass}`, {
      type: 'words,chars'
    });

    const { chars } = mySplitText;

    if (superheroActive) {
      this.setState({
        activedLetters: chars,
        activedLettersLength: chars.length
      });
    }

    return chars;
  }

  /* createTimeline(elementToAnimate) {
    const { activedLetters, tl, configTl } = this.state;
    const { introAnimation, inAnimation, outAnimation } = configTl;

    console.log('activedLetters from createTimeline: ', activedLetters);

    tl.addLabel('intro')
      .staggerFromTo(
        elementToAnimate,
        introAnimation.duration,
        {
          alpha: 0,
          x: -50,
          rotationY: 120
        },
        {
          alpha: 1,
          x: 0,
          rotationY: 0,
          transformOrigin: '50% 50%',
          ease: Power1.easeOut
        },
        0.08,
        `+=${introAnimation.delay}`
      )
      .addPause()
      .addLabel('outRight')
      .staggerFromTo(
        elementToAnimate,
        outAnimation.duration,
        {
          alpha: 1,
          x: 0,
          rotationY: 0
        },
        {
          cycle: { x: i => 50 + i * 40 },
          alpha: 0,
          rotationY: 0,
          ease: Power1.easeIn
        },
        0.01,
        `+=${outAnimation.delay}`
      )
      .addPause()
      .addLabel('outLeft')
      .staggerFromTo(
        elementToAnimate,
        outAnimation.duration,
        {
          alpha: 1,
          x: 0,
          rotationY: 0
        },
        {
          cycle: { x: i => -200 + i * 20 },
          alpha: 0,
          rotationY: 0,
          ease: Power1.easeIn
        },
        0.01,
        `+=${outAnimation.delay}`
      )
      .addPause()
      .addLabel('in')
      .staggerFromTo(
        elementToAnimate,
        inAnimation.duration,
        {
          alpha: 0,
          rotationY: 0,
          cycle: { x: i => -200 - i * 20 }
        },
        {
          alpha: 1,
          rotationY: 0,
          x: 0,
          ease: Power1.easeOut
        },
        0.02,
        `+=${inAnimation.delay}`
      )
      .addPause();
  } */

  mouseOverHandler() {
    // const createdLetters = this.createSuperheroLetters();
    const { activedLetters, activedLettersLength } = this.state;
    const { triggerOverLogoAnimation } = this.props;

    activedLetters.forEach((letter, i) => {
      if (i < activedLettersLength / 2)
        TweenMax.to(letter, 1, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
      if (i > activedLettersLength / 2)
        TweenMax.to(letter, 1.2, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
    });

    triggerOverLogoAnimation();
  }

  mouseOutHandler() {
    const { activedLetters } = this.state;
    const { triggerOutLogoAnimation } = this.props;

    activedLetters.forEach(letter => {
      TweenMax.to(letter, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    triggerOutLogoAnimation();
  }

  clickHandler() {
    const { desactiveOverMenuLetters } = this.props;
    const { activedLetters, configLettersAnimations } = this.state;
    const { outRightAnimation } = configLettersAnimations;

    outLettersMenu(activedLetters, outRightAnimation);
    desactiveOverMenuLetters();
  }

  render() {
    const {
      superheroName,
      superheroClass,
      superheroActive,
      isActiveOverMenuLetters
    } = this.props;

    const getLettersContainerClasses = () =>
      !superheroActive ? 'letters_container' : 'letters_container active';

    const getLettersBtnClasses = () =>
      !isActiveOverMenuLetters ? 'letters_btn' : 'letters_btn active';

    return (
      <div className={getLettersContainerClasses()}>
        <button
          className={getLettersBtnClasses()}
          type="button"
          onMouseOver={() => {
            if (isActiveOverMenuLetters) this.mouseOverHandler();
          }}
          onMouseOut={() => {
            if (isActiveOverMenuLetters) this.mouseOutHandler();
          }}
          onKeyDown={e => e.preventDefault}
          onFocus={e => e.preventDefault}
          onBlur={e => e.preventDefault}
          onClick={() => {
            this.clickHandler();
          }}
        />
        <h2 className={`letters ${superheroClass}`}>{superheroName}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inDirection: state.lettersMenuRdc.inDirectionMenuLetters,
  outDirection: state.lettersMenuRdc.outDirectionMenuLetters,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  triggerOverLogoAnimation: () =>
    dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_MOUSE_OVER }),
  triggerOutLogoAnimation: () =>
    dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_MOUSE_OUT }),
  desactiveOverMenuLetters: () =>
    dispatch({ type: actionTypes.DESACTIVE_OVER_MENU_LETTERS })
});

LettersCharacter.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  inDirection: PropTypes.string.isRequired,
  outDirection: PropTypes.string.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  triggerOverLogoAnimation: PropTypes.func.isRequired,
  triggerOutLogoAnimation: PropTypes.func.isRequired,
  desactiveOverMenuLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LettersCharacter);
