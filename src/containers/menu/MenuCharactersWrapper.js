import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import Background from '../../components/menu/Background/Background';
import Letters from '../../components/menu/LettersCharacter';
import LogoCharacter from '../../components/menu/LogoCharacter';

class MenuCharactersWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false,
      delayOnMouseWheel: null
    };

    this.getActiveSuperhero = this.getActiveSuperhero.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate from MenuCharactersWrapper');
  }

  getActiveSuperhero() {
    const { superheroesList } = this.props;
    const activeSuperhero = superheroesList.reduce(
      (allSuperheroes, superhero) => {
        let listSuperhero = allSuperheroes;
        if (superhero.isActive === true) listSuperhero = superhero;
        return listSuperhero;
      },
      {}
    ).name;

    return activeSuperhero;
  }

  changeMenu(e) {
    const { delayOnMouseWheel } = this.state;
    const {
      setActiveSuperhero,
      setDirectionInLetters,
      setDirectionOutLetters
    } = this.props;

    // console.log('changeMenu from MenuCharactersWrapper');

    if (e.deltaY > 0) {
      // console.log('go next superhero');
      setDirectionInLetters('left');
      setDirectionOutLetters('right');
      setActiveSuperhero('next');
    } else {
      // console.log('go prev superhero');
      setDirectionInLetters('right');
      setDirectionOutLetters('left');
      setActiveSuperhero('prev');
    }

    clearTimeout(delayOnMouseWheel);

    this.setState({
      onMouseWheel: false
    });
  }

  mouseWheelHandler(e) {
    const { isActiveOverMenuLetters } = this.props;
    const { onMouseWheel } = this.state;

    if (onMouseWheel || !isActiveOverMenuLetters) return;

    this.setState({
      onMouseWheel: true,
      delayOnMouseWheel: setTimeout(() => this.changeMenu(e), 1300)
    });
  }

  render() {
    // const { inDirection, outDirection } = this.props;
    const { superheroesList } = this.props;
    return (
      <div className="menuCharacters_wrapper">
        <Background />
        {superheroesList.map(superhero => (
          <Letters
            key={superhero.id}
            superheroName={superhero.name}
            superheroClass={superhero.class}
            superheroActive={superhero.active}
            superheroBreakpointCharacter={superhero.breakpointCharacter}
          />
        ))}
        <LogoCharacter superheroName={this.getActiveSuperhero()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  setActiveSuperhero: selected =>
    dispatch({
      type: actionTypes.SET_ACTIVE_SUPERHERO_MENU,
      active: selected
    }),
  setDirectionInLetters: directionSelected =>
    dispatch({
      type: actionTypes.SET_DIRECTION_IN_MENU_LETTERS,
      direction: directionSelected
    }),
  setDirectionOutLetters: directionSelected =>
    dispatch({
      type: actionTypes.SET_DIRECTION_OUT_MENU_LETTERS,
      direction: directionSelected
    })
});

MenuCharactersWrapper.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  setActiveSuperhero: PropTypes.func.isRequired,
  setDirectionInLetters: PropTypes.func.isRequired,
  setDirectionOutLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCharactersWrapper);
