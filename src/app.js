import React, { Component, Fragment } from 'react';
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
    console.log('onClickLettersHandler');
  }

  render() {
    return (
      <Fragment>
        <Lansdcape />
        <GithubCorner />
        <LogoJL />
        <Intro />
        <Menu onClickLetters={this.onClickLettersHandler} />
      </Fragment>
    );
  }
}

export default App;
