import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import Logo from '../components/Intro/Logo';
import Letters from '../components/Intro/Letters';
import { introLogoIntro, introLettersIntro } from '../utils/animations';

class Intro extends Component {
  componentDidMount() {
    const { setEndIntro } = this.props;

    const logoSvg = document.querySelectorAll('.logo_svg_intro');
    const logoPath = document.querySelectorAll('.logo_path_intro');
    const letters = document.querySelectorAll('.letters_path_intro');

    const introLogoSvg = introLogoIntro(logoSvg);
    introLogoSvg(logoPath);

    const introLettersPath = introLettersIntro(letters);
    introLettersPath(setEndIntro);
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
  isIntroOver: state.introRdc.setEndIntro
});

const mapDispatchToProps = dispatch => ({
  setEndIntro: () => dispatch({ type: actionTypes.SET_END_INTRO })
});

Intro.propTypes = {
  isIntroOver: PropTypes.bool.isRequired,
  setEndIntro: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);
