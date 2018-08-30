import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import {
  introLettersMenu,
  inLeftLettersMenu,
  inRightLettersMenu,
  outLeftLettersMenu,
  outRightLettersMenu
} from '../../../utils/animations';

class LettersCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLetters: null,
      activedLetters: null,
      totalSuperheroCharacters: 0
    };

    this.createSuperheroLetters = this.createSuperheroLetters.bind(this);
    this.setActiveLetters = this.setActiveLetters.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { superheroActive } = this.props;

    const createdLetters = this.createSuperheroLetters();

    if (superheroActive) introLettersMenu(createdLetters);
    else TweenMax.set(createdLetters, { alpha: 0 });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { superheroActive } = this.props;
    if (superheroActive !== nextProps.superheroActive) return true;
    return false;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate from LettersCharacter');
    const { superheroActive } = this.props;

    this.setActiveLetters();

    const { allLetters, activedLetters } = this.state;

    if (superheroActive) inLeftLettersMenu(allLetters);
    else outRightLettersMenu(activedLetters);
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

    console.log('distance: ', distance);
    return distance;
  }

  setActiveLetters() {
    const { superheroName, superheroActive } = this.props;
    const { allLetters } = this.state;

    if (superheroActive) {
      this.setState({
        activedLetters: allLetters,
        totalSuperheroCharacters: superheroName.length
      });
    }
  }

  createSuperheroLetters() {
    const { superheroClass } = this.props;

    const mySplitText = new SplitText(`.${superheroClass}`, {
      type: 'words,chars'
    });

    const { chars } = mySplitText;

    this.setState({
      allLetters: chars
    });

    this.setActiveLetters();

    return chars;
  }

  mouseOverHandler() {
    // const createdLetters = this.createSuperheroLetters();
    const { activedLetters } = this.state;
    const {
      superheroBreakpointCharacter,
      triggerOverLogoAnimation
    } = this.props;

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
    const { activedLetters } = this.state;

    outRightLettersMenu(activedLetters);
    desactiveOverMenuLetters();
  }

  render() {
    console.log('render from LettersCharacter');

    const {
      superheroName,
      superheroClass,
      superheroActive,
      isActiveOverMenuLetters
    } = this.props;

    const getLettersContainerClasses = () =>
      !superheroActive ? 'letters_container' : 'letters_container active';

    const getLettersBtnClasses = () =>
      !superheroActive ? 'letters_btn' : 'letters_btn active';

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
  superheroBreakpointCharacter: PropTypes.number.isRequired,
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
