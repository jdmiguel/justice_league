import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Lansdcape from './components/Landscape';
import GithubCorner from './components/GithubCorner';
import LogoJL from './components/LogoJL';
import Intro from './components/Intro';
import Menu from './containers/menu';
import Character from './containers/character';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onMenu: true
    };

    this.onClickLettersHandler = this.onClickLettersHandler.bind(this);
  }

  onClickLettersHandler() {
    this.setState({
      onMenu: false
    });
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
          <Character characterActive={counterActivateSuperhero} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  counterActivateSuperhero: state.superheroesMenuRdc.counterActivateSuperhero
});

App.propTypes = {
  counterActivateSuperhero: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  null
)(App);
