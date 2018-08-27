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
  }

  componentDidMount() {
    document.addEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
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

  changeMenu(e) {
    const { delayOnMouseWheel } = this.state;
    console.log('changeMenu: ', e);
    const { setActiveSuperhero } = this.props;
    // console.log(e);
    if (e.deltaY > 0) setActiveSuperhero('next');
    else setActiveSuperhero('prev');

    clearTimeout(delayOnMouseWheel);
    this.setState({
      onMouseWheel: false
    });
  }

  render() {
    const { superheroesList } = this.props;
    // console.log('from render__ superheroes: ', superheroesList);
    const activeSuperhero = superheroesList.reduce(
      (allSuperheroes, superhero) => {
        if (superhero.isActive === true) allSuperheroes = superhero;
        return allSuperheroes;
      },
      {}
    ).name;

    return (
      <div className="menuCharacters_wrapper">
        <Background />
        <Letters superhero={activeSuperhero} />
        <LogoCharacter superhero={activeSuperhero} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  setActiveSuperhero: select =>
    dispatch({
      type: actionTypes.SET_ACTIVE_SUPERHERO_MENU,
      active: select
    })
});

MenuCharactersWrapper.propTypes = {
  superheroesList: PropTypes.array.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  setActiveSuperhero: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuCharactersWrapper);
