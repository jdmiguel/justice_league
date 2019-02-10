import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setAnimationMenuLettersOver,
  setAnimationMenuLettersOut
} from '../../../store/actions/menu/letters';

import {
  inRightLettersMenu,
  inLeftLettersMenu,
  outRightLettersMenu,
  outLeftLettersMenu
} from '../../../utils/animations';

class Letters extends Component {
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
    this.createSuperheroLetters();
  }

  shouldComponentUpdate(nextProps) {
    const { superheroActive } = this.props;

    if (superheroActive !== nextProps.superheroActive) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    const { superheroActive, inDirection, outDirection } = this.props;
    const { allLetters, activedLetters } = this.state;

    this.setActiveLetters();

    if (superheroActive) {
      if (inDirection === 'left') {
        inLeftLettersMenu(allLetters);
      } else {
        inRightLettersMenu(allLetters);
      }
    }

    if (!superheroActive) {
      if (outDirection === 'left') {
        outLeftLettersMenu(activedLetters);
      } else {
        outRightLettersMenu(activedLetters);
      }
    }
  }

  getDistance(index, splitFactor) {
    const { superheroBreakpointCharacter } = this.props;
    const { totalSuperheroCharacters } = this.state;
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

    TweenMax.set(chars, { alpha: 0 });

    this.setState({
      allLetters: chars
    });
  }

  mouseOverHandler() {
    const { activedLetters } = this.state;
    const {
      isActiveOverMenuLetters,
      superheroActive,
      superheroBreakpointCharacter,
      setAnimationMenuLettersOverHandler
    } = this.props;

    if (!isActiveOverMenuLetters || !superheroActive) {
      return;
    }

    activedLetters.forEach((letter, i) => {
      if (i < superheroBreakpointCharacter) {
        TweenMax.to(letter, 1, {
          x: `${this.getDistance(i, 0.45)}`,
          ease: Power1.easeOut
        });
      }

      if (i > superheroBreakpointCharacter) {
        TweenMax.to(letter, 1.2, {
          x: `${this.getDistance(i, 0.45)}`,
          ease: Power1.easeOut
        });
      }
    });

    setAnimationMenuLettersOverHandler();
  }

  mouseOutHandler() {
    const {
      isActiveOverMenuLetters,
      superheroActive,
      setAnimationMenuLettersOutHandler
    } = this.props;
    const { activedLetters } = this.state;

    if (!isActiveOverMenuLetters || !superheroActive) {
      return;
    }

    activedLetters.forEach(letter => {
      TweenMax.to(letter, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    setAnimationMenuLettersOutHandler();
  }

  clickHandler() {
    const { activedLetters } = this.state;
    const { superheroBreakpointCharacter, onClick } = this.props;

    activedLetters.forEach((letter, i) => {
      if (i < superheroBreakpointCharacter) {
        TweenMax.to(letter, 1, {
          x: `${this.getDistance(i, 2)}`,
          autoAlpha: 0,
          ease: Power1.easeOut
        });
      }

      if (i === superheroBreakpointCharacter) {
        TweenMax.to(letter, 1.2, {
          autoAlpha: 0,
          ease: Power1.easeOut
        });
      }

      if (i > superheroBreakpointCharacter) {
        TweenMax.to(letter, 1.2, {
          x: `${this.getDistance(i, 2)}`,
          autoAlpha: 0,
          ease: Power1.easeOut
        });
      }
    });

    onClick();
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
          onClick={this.clickHandler}
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
  setAnimationMenuLettersOverHandler: () =>
    dispatch(setAnimationMenuLettersOver()),
  setAnimationMenuLettersOutHandler: () =>
    dispatch(setAnimationMenuLettersOut())
});

Letters.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  superheroBreakpointCharacter: PropTypes.number.isRequired,
  inDirection: PropTypes.string.isRequired,
  outDirection: PropTypes.string.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  setAnimationMenuLettersOverHandler: PropTypes.func.isRequired,
  setAnimationMenuLettersOutHandler: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Letters);
