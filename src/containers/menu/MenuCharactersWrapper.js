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
    console.log('componentDidUpdate');
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
    const { setActiveSuperhero, setOutDirectionLetters } = this.props;

    if (e.deltaY > 0) {
      setActiveSuperhero('next');
      setOutDirectionLetters('right');
    } else {
      setActiveSuperhero('prev');
      setOutDirectionLetters('left');
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
      delayOnMouseWheel: setTimeout(() => this.changeMenu(e), 1000)
    });
  }

  render() {
    const { outDirection } = this.props;
    return (
      <div className="menuCharacters_wrapper">
        <Background />
        <Letters superhero="superman" outDirection={outDirection} />
        <LogoCharacter superhero={this.getActiveSuperhero()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters,
  outDirection: state.lettersMenuRdc.outDirectionMenuLetters
});

const mapDispatchToProps = dispatch => ({
  setActiveSuperhero: selected =>
    dispatch({
      type: actionTypes.SET_ACTIVE_SUPERHERO_MENU,
      active: selected
    }),
  setOutDirectionLetters: directionSelected =>
    dispatch({
      type: actionTypes.SET_OUT_DIRECTION_MENU_LETTERS,
      direction: directionSelected
    })
});

MenuCharactersWrapper.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  outDirection: PropTypes.string.isRequired,
  setActiveSuperhero: PropTypes.func.isRequired,
  setOutDirectionLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCharactersWrapper);
