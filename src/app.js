import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LandscapeImg from '../assets/img/landscape.png';
import Intro from './components/Intro';
import Menu from './containers/menu';
import Character from './containers/character';

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
        <div className="landscape_container">
          <img alt="landscape forced" src={LandscapeImg} />
        </div>
        <a
          href="https://github.com/jdmiguel/website_animated"
          target="_blank"
          rel="noopener noreferrer"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              className="octo-arm"
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            />
            <path
              className="octo-body"
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            />
          </svg>
        </a>
        <h2 className="logoJL_container">
          <svg
            width="798.941px"
            height="152.105px"
            viewBox="0 0 798.941 152.105"
            enableBackground="new 0 0 798.941 152.105"
            xmlSpace="preserve"
          >
            <path
              fill="#FFFFFF"
              d="M162.074,25.395l5.074,15.053h12.892c0.376,0,0.68,0.304,0.68,0.68v73.807c0,0.376-0.304,0.68-0.68,0.68h-9.614
		c-0.376,0-0.68-0.304-0.68-0.68v-25.08l-14.543,9.979v20.442v3.277c0,3.95,3.177,7.139,7.114,7.139h25.71
		c3.936,0,7.09-3.189,7.09-7.139v-3.277V32.533v-7.138h-7.09h-25.71H162.074z"
            />
            <path
              fill="#FFFFFF"
              d="M251.104,25.395c-3.896,0-8.134,4.548-8.134,8.497v33.865c0.554,1.691,1.501,3.383,3.69,5.074l21.122,15.757v27.294h-10.134V99.761
		l-12.494-9.663h-2.185v32.218c0,3.95,4.238,8.377,8.134,8.377h23.356c3.895,0,7.987-4.427,7.987-8.377V81.746
		c-0.554-1.691-1.5-3.384-3.69-5.074l-21.122-15.781V40.472h10.707v17.554l2.039,0.146l12.066-9.323V33.892
		c0-3.949-4.092-8.497-7.987-8.497H251.104z"
            />
            <path
              fill="#FFFFFF"
              d="M199.317,25.395
		v98.159c0.533,4.057,2.585,6.696,6.992,7.139h25.298c3.873,0,6.968-3.189,6.968-7.139V25.395h-13.839v89.564
		c0,0.529-0.417,0.947-0.947,0.947h-9.323c-0.529,0-0.971-0.417-0.971-0.947V25.395H199.317z"
            />
            <path
              fill="#FFFFFF"
              d="M621,25.099v7.137v87.743v3.279
		c0,3.949,3.425,7.138,7.677,7.138h27.772c4.252,0,7.648-3.189,7.648-7.138v-3.279V32.236v-7.137h-7.648h-7.543v89.563
		c0,0.53-0.458,0.947-1.04,0.947h-10.235c-0.581,0-1.066-0.417-1.066-0.947V25.099h-7.889H621z"
            />
            <path
              fill="#FFFFFF"
              d="M286.028,25.662v14.542h9.129
		c0.529,0,0.947,0.418,0.947,0.947v89.54h14.252v-89.54c0-0.529,0.442-0.947,0.971-0.947h9.663V25.662H286.028z"
            />
            <path
              fill="#FFFFFF"
              d="M324.266,25.565v105.127h14.543V79.172l-7.138,4.905
		l3.836-10.829l-9.323-6.725h11.265l1.36-4.442V25.565H324.266z"
            />
            <path
              fill="#FFFFFF"
              d="M387.791,25.565
		v105.127h37.414v-15.15h-22.872V81.431h15.879l5.073-15.15h-20.952V40.714h22.872v-15.15H387.791z"
            />
            <path
              fill="#FFFFFF"
              d="M669.617,25.269
		v105.126h37.414v-15.15H684.16V81.133h15.879l5.347-15.15H684.16V40.419h22.871v-15.15H669.617z"
            />
            <path
              fill="#FFFFFF"
              d="M480.809,25.269
		v105.126h35.281v-15.15h-20.738V81.133h15.878l5.895-15.15h-21.773V40.419h22.871v-15.15H480.809z"
            />
            <path
              fill="#FFFFFF"
              d="M350.269,25.395c-4.407,0.442-6.46,3.081-6.993,7.138
		v28.552l1.845,5.706h10.417l-9.323,6.87l4.248,10.682l-7.186-4.928v44.139c0.533,4.057,2.586,6.696,6.993,7.139h25.298
		c3.874,0,6.968-3.189,6.968-7.139v-23.307l-13.839-10.828v25.541c0,0.529-0.416,0.947-0.945,0.947h-9.323
		c-0.531,0-0.971-0.417-0.971-0.947v-69v-4.831c0-0.529,0.44-0.947,0.971-0.947h9.323c0.529,0,0.945,0.417,0.945,0.947v4.831v17.675
		l13.839-10.124V32.533c0-3.949-3.094-7.138-6.968-7.138H350.269z"
            />
            <path
              fill="#FFFFFF"
              d="M443.549,25.36v89.685
		v15.474h33.601v-15.474h-18.646V25.36H443.549z"
            />
            <path
              fill="#FFFFFF"
              d="M534.017,25.263
		l-13.457,104.98h14.033l1.942-16.194h17.288l1.918,16.194h14.057l-13.457-104.98H534.017z M545.178,45.046l6.799,53.586h-13.621
		L545.178,45.046z"
            />
            <path
              fill="#FFFFFF"
              d="M572.511,33.109c0.686-3.332,1.186-6.727,7.658-8.046h27.728c3.277,1.495,6.376,3.247,7.367,8.046v20.456l-13.961,9.888V40.186
		h-14.832v74.939h14.445V86.817h-8.919l4.945-15.22h18.323v59.041h-9.986l-2.035-4.653c-2.713,3.238-5.818,4.904-9.307,5.04h-13.572
		c-5.691-0.586-7.494-4.09-8.047-8.531L572.511,33.109z"
            />
          </svg>
        </h2>
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
