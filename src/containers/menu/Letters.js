import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import {
  introLettersMenu,
  inRightLettersMenu,
  inLeftLettersMenu,
  outRightLettersMenu,
  outLeftLettersMenu
} from '../../utils/animations';

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLetters: null,
      activedLetters: null,
      totalSuperheroCharacters: 0
    };

    this.createSuperheroLetters = this.createSuperheroLetters.bind(this);
    this.introSuperheroLetters = this.introSuperheroLetters.bind(this);
    this.setActiveLetters = this.setActiveLetters.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.createSuperheroLetters();
  }

  shouldComponentUpdate(nextProps) {
    const { superheroActive } = this.props;
    if (superheroActive !== nextProps.superheroActive) return true;
    return false;
  }

  componentDidUpdate() {
    const { superheroActive, inDirection, outDirection } = this.props;

    this.setActiveLetters();

    const { allLetters, activedLetters } = this.state;

    if (superheroActive) {
      if (inDirection === 'left') inLeftLettersMenu(allLetters);
      else inRightLettersMenu(allLetters);
    }

    if (!superheroActive) {
      if (outDirection === 'left') outLeftLettersMenu(activedLetters);
      else outRightLettersMenu(activedLetters);
    }
  }

  getDistance(index) {
    const { superheroBreakpointCharacter } = this.props;
    const { totalSuperheroCharacters } = this.state;
    const splitFactor = 0.45;

    const distance =
      index < superheroBreakpointCharacter
        ? (Math.sin(index) - totalSuperheroCharacters) *
          (superheroBreakpointCharacter - index) *
          splitFactor
        : (Math.sin(index) + totalSuperheroCharacters) *
          (index - superheroBreakpointCharacter) *
          splitFactor;

    return distance;
  }

  setActiveLetters(stage = '') {
    const { superheroName, superheroActive } = this.props;
    const { allLetters } = this.state;

    if (superheroActive) {
      this.setState(
        {
          activedLetters: allLetters,
          totalSuperheroCharacters: superheroName.length
        },
        () => {
          if (stage === 'intro') this.introSuperheroLetters();
        }
      );
    }
  }

  introSuperheroLetters() {
    const { activedLetters } = this.state;

    introLettersMenu(activedLetters);
  }

  createSuperheroLetters() {
    const { superheroClass } = this.props;

    const mySplitText = new SplitText(`.${superheroClass}`, {
      type: 'words,chars'
    });

    const { chars } = mySplitText;

    TweenMax.set(chars, { alpha: 0 });

    this.setState(
      {
        allLetters: chars
      },
      () => {
        this.setActiveLetters('intro');
      }
    );
  }

  mouseOverHandler() {
    const { activedLetters } = this.state;
    const {
      isActiveOverMenuLetters,
      superheroActive,
      superheroBreakpointCharacter,
      triggerOverLettersAnimation
    } = this.props;

    if (!isActiveOverMenuLetters || !superheroActive) return;

    activedLetters.forEach((letter, i) => {
      if (i < superheroBreakpointCharacter)
        TweenMax.to(letter, 1, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
      if (i > superheroBreakpointCharacter)
        TweenMax.to(letter, 1.2, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
    });

    triggerOverLettersAnimation();
  }

  mouseOutHandler() {
    const { activedLetters } = this.state;
    const { triggerOutLettersAnimation } = this.props;

    activedLetters.forEach(letter => {
      TweenMax.to(letter, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    triggerOutLettersAnimation();
  }

  clickHandler() {
    console.log(this);
  }

  render() {
    const { superheroName, superheroClass, superheroActive } = this.props;

    const getLettersContainerClasses = () =>
      !superheroActive ? 'letters_container' : 'letters_container active';

    return (
      <div className={getLettersContainerClasses()}>
        <button
          className="letters_btn"
          type="button"
          onMouseOver={this.mouseOverHandler}
          onMouseOut={this.mouseOutHandler}
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
  inDirection: state.directionsMenuRdc.inDirectionMenu,
  outDirection: state.directionsMenuRdc.outDirectionMenu,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  triggerOverLettersAnimation: () =>
    dispatch({ type: actionTypes.ANIMATION_MENU_LETTERS_OVER }),
  triggerOutLettersAnimation: () =>
    dispatch({ type: actionTypes.ANIMATION_MENU_LETTERS_OUT })
});

Letters.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  superheroBreakpointCharacter: PropTypes.number.isRequired,
  inDirection: PropTypes.string.isRequired,
  outDirection: PropTypes.string.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  triggerOverLettersAnimation: PropTypes.func.isRequired,
  triggerOutLettersAnimation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Letters);
