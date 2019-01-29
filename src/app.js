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
    this.setState({
      onMenu: false
    });
  }

  render() {
    const { onMenu } = this.state;

    return (
      <Fragment>
        <Lansdcape />
        <GithubCorner />
        <LogoJL />
        <Intro />
        {onMenu ? (
          <Menu onClickLetters={this.onClickLettersHandler} />
        ) : (
          <Character />
        )}
      </Fragment>
    );
  }
}

export default App;
