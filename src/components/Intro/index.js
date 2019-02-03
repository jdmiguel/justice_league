import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './IntroLogoDC';
import Letters from './IntroLettersJL';
import {
  introLogoIntro,
  introLettersIntro,
  outIntro
} from '../../utils/animations';

import { setActiveSuperhero } from '../../store/actions/menu/superheroes';

class Intro extends Component {
  componentDidMount() {
    const {
      setActiveSuperheroHandler,
      superheroesList,
      counterActivateSuperhero
    } = this.props;
    const logoSvg = document.querySelector('.introLogoDC_svg');
    const logoPath = document.querySelector('.introLogoDC_path');
    const introContainer = document.querySelector('.intro_container');
    const letters = document.querySelectorAll('.introLettersJL_path');
    const superheroData = {
      superheroesList,
      counterActivateSuperhero
    };

    introLogoIntro(
      logoSvg,
      logoPath,
      outIntro,
      introContainer,
      setActiveSuperheroHandler,
      superheroData,
      counterActivateSuperhero
    );

    introLettersIntro(letters);
  }

  render() {
    return (
      <div className="intro_container">
        <Logo />
        <Letters />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  counterActivateSuperhero: state.superheroesMenuRdc.counterActivateSuperhero
});

const mapDispatchToProps = dispatch => ({
  setActiveSuperheroHandler: (data, selected) =>
    dispatch(setActiveSuperhero(data, selected))
});

Intro.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterActivateSuperhero: PropTypes.number.isRequired,
  setActiveSuperheroHandler: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
