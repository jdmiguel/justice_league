import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

class LettersCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: new TimelineMax({ paused: true }),
      configTl: {
        introAnimation: {
          delay: 4.5,
          duration: 1.1
        },
        outAnimation: {
          delay: 0,
          duration: 0.4
        },
        inAnimation: {
          delay: 0,
          duration: 1.1
        }
      },
      letters: null,
      lettersLength: 0
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.createTimeline();
    this.setTimeline('intro');
  }

  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) return true;
    return false;
  }

  componentDidUpdate() {
    this.setTimeline('out');
  }

  getDistance(index) {
    const { lettersLength } = this.state;
    const factor = lettersLength / 2;
    const distance =
      index < lettersLength / 2
        ? (Math.sin(index) - lettersLength) * (factor - index)
        : (Math.sin(index) + lettersLength) * (index - factor);

    return distance;
  }

  setTimeline(typeAnimation = 'intro') {
    const { tl } = this.state;

    switch (typeAnimation) {
      case 'intro':
        tl.play('intro');
        break;
      case 'in':
        tl.play('in');
        break;
      case 'out':
        tl.play('out');
        break;
      default:
        tl.play('intro');
        break;
    }
  }

  createTimeline() {
    const lettersCreated = this.createSuperheroLetters();

    const { tl, configTl } = this.state;
    const { introAnimation, inAnimation, outAnimation } = configTl;

    tl.addLabel('intro')
      .staggerFromTo(
        lettersCreated,
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
      .addLabel('out')
      .staggerFromTo(
        lettersCreated,
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
      .addLabel('in')
      .staggerFromTo(
        lettersCreated,
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
  }

  createSuperheroLetters() {
    const { superhero } = this.props;
    const classSelected = `.${superhero}`;

    const mySplitText = new SplitText(classSelected, {
      type: 'words,chars'
    });

    const { chars } = mySplitText;

    this.setState({
      letters: chars,
      lettersLength: chars.length
    });

    return chars;
  }

  mouseOverHandler() {
    const { letters, lettersLength } = this.state;
    const { inLogoAnimation } = this.props;

    letters.forEach((letter, i) => {
      if (i < lettersLength / 2)
        TweenMax.to(letter, 1, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
      if (i > lettersLength / 2)
        TweenMax.to(letter, 1.2, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
    });

    inLogoAnimation();
  }

  mouseOutHandler() {
    const { letters } = this.state;
    const { outLogoAnimation } = this.props;

    letters.forEach(letter => {
      TweenMax.to(letter, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    outLogoAnimation();
  }

  clickHandler() {
    const { tl } = this.state;
    const { desactiveOverMenuLetters } = this.props;

    tl.play('out');
    desactiveOverMenuLetters();
  }

  render() {
    const { superhero, isActiveOverMenuLetters } = this.props;
    const getLettersClasses = () =>
      !isActiveOverMenuLetters
        ? `letters ${superhero}`
        : `letters ${superhero} active`;

    return (
      <div className="letters_container">
        <button
          className="letters_btn"
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
          onClick={this.clickHandler}
        />
        <h2 className={getLettersClasses()}>{superhero}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  inLogoAnimation: () => dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_IN }),
  outLogoAnimation: () =>
    dispatch({ type: actionTypes.MENU_LOGO_ANIMATION_OUT }),
  desactiveOverMenuLetters: () =>
    dispatch({ type: actionTypes.DESACTIVE_OVER_MENU_LETTERS })
});

LettersCharacter.propTypes = {
  superhero: PropTypes.string.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  inLogoAnimation: PropTypes.func.isRequired,
  outLogoAnimation: PropTypes.func.isRequired,
  desactiveOverMenuLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LettersCharacter);
