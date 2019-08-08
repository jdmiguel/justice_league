import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/** Components */
import Logo from './IntroLogoDC';
import Letters from './IntroLettersJL';

/** Utils */
import {
  introLogoIntro,
  introLettersIntro,
  outIntro
} from '../../utils/animations';
import {
  svgLogoDcRef,
  pathLogoDcRef,
  introContainerRef,
  pathsJLRef
} from '../../utils/literals';

/** Actions */
import { setActiveSuperhero } from '../../store/actions/menu/superheroes';

class Intro extends Component {
  componentDidMount() {
    const {
      setActiveSuperheroHandler,
      superheroesList,
      counterActivateSuperhero
    } = this.props;
    const superheroData = {
      superheroesList,
      counterActivateSuperhero
    };

    introLogoIntro(
      svgLogoDcRef,
      pathLogoDcRef,
      outIntro,
      introContainerRef,
      setActiveSuperheroHandler,
      superheroData,
      counterActivateSuperhero
    );

    introLettersIntro(pathsJLRef);
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
