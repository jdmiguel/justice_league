import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Lansdcape from './components/Landscape';
import GithubCorner from './components/GithubCorner';
import LogoJL from './components/LogoJL';
import Intro from './components/Intro';
import Menu from './containers/menu';
import Character from './containers/character';
import ByJdmiguel from './components/ByJdmiguel';
import Rights from './components/Rights';

import setEndFirstUserTime from './store/actions/global';
import {
  resetActiveSuperhero,
  setActiveSuperhero
} from './store/actions/menu/superheroes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onMenu: true
    };

    this.onClickLettersHandler = this.onClickLettersHandler.bind(this);
    this.onClickBackBtnHandler = this.onClickBackBtnHandler.bind(this);
  }

  onClickLettersHandler() {
    const {
      setEndFirstUserTimeHandler,
      superheroesList,
      resetActiveSuperheroHandler
    } = this.props;

    setEndFirstUserTimeHandler();
    resetActiveSuperheroHandler(superheroesList);

    this.setState({
      onMenu: false
    });
  }

  onClickBackBtnHandler() {
    const {
      setActiveSuperheroHandler,
      superheroesList,
      counterActivateSuperhero
    } = this.props;
    const superheroData = {
      superheroesList,
      counterActivateSuperhero
    };

    this.setState(
      {
        onMenu: true
      },
      () => {
        setActiveSuperheroHandler(superheroData, counterActivateSuperhero);
      }
    );
  }

  render() {
    const { onMenu } = this.state;
    const { counterActivateSuperhero } = this.props;

    return (
      <Fragment>
        <Lansdcape />
        <GithubCorner />
        <LogoJL />
        <Intro />
        {onMenu ? (
          <Menu onClickLetters={this.onClickLettersHandler} />
        ) : (
          <Character
            characterActive={counterActivateSuperhero}
            onClickBackBtn={this.onClickBackBtnHandler}
          />
        )}
        <ByJdmiguel />
        <Rights />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  counterActivateSuperhero: state.superheroesMenuRdc.counterActivateSuperhero
});

const mapDispatchToProps = dispatch => ({
  setEndFirstUserTimeHandler: () => dispatch(setEndFirstUserTime()),
  resetActiveSuperheroHandler: data => dispatch(resetActiveSuperhero(data)),
  setActiveSuperheroHandler: (data, selected) =>
    dispatch(setActiveSuperhero(data, selected))
});

App.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterActivateSuperhero: PropTypes.number.isRequired,
  setEndFirstUserTimeHandler: PropTypes.func.isRequired,
  resetActiveSuperheroHandler: PropTypes.func.isRequired,
  setActiveSuperheroHandler: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
