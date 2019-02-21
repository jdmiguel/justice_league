import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import characterImgPreload from './utils/preloadImgCharacters';

import { landscapeImgPath } from './utils/imgPaths';

import LogoJL from './components/logoJL';
import GithubCorner from './components/githubCorner';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

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

  componentDidMount() {
    characterImgPreload();
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
        <div className="landscape_container">
          <img alt="landscape forced" src={landscapeImgPath} />
          <p>
            Coloca tu móvil o tablet en horizontal
            <br />
            para disfrutar de una mejor experiencia.
          </p>
        </div>
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
        <div className="byJdmiguel">
          <h3>
            Site created by{' '}
            <a
              href="https://jdmiguel.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
            >
              jdmiguel
            </a>
          </h3>
        </div>
        <div className="based">
          <h4>Based on DC characters</h4>
        </div>
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
