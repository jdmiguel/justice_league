import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { activeOverMenuLetters } from '../../../store/actions/menu/letters';

import SupermanLogo from './SupermanLogo';
import BatmanLogo from './BatmanLogo';
import WonderWomanLogo from './WonderWomanLogo';
import FlashLogo from './FlashLogo';
import GreenLanternLogo from './GreenLanternLogo';
import GreenArrowLogo from './GreenArrowLogo';
import AquamanLogo from './AquamanLogo';
import CyborgLogo from './CyborgLogo';
import { introLogoMenu } from '../../../utils/animations';

class SuperheroLogo extends Component {
  componentDidMount() {
    const { isFirstUserTime, activeOverMenuLettersHandler } = this.props;
    const logo = document.querySelectorAll('.superheroLogo_svg');

    introLogoMenu(logo, activeOverMenuLettersHandler, isFirstUserTime);
  }

  render() {
    const {
      superheroActive,
      superheroClass,
      isActiveMenuLettersAnimation
    } = this.props;
    const listClasses = ['menuCharacters_logo', `${superheroClass}`];

    if (superheroActive) {
      listClasses.push('active');
      listClasses.push('move');
    }

    if (superheroActive && isActiveMenuLettersAnimation) {
      const moveIndex = listClasses.findIndex( item => item === 'move' );
      listClasses.splice(moveIndex,1);
      listClasses.push('highlight');
    }

    switch (superheroClass) {
      case 'superman':
        return <SupermanLogo classes={listClasses.join(' ')} />;
      case 'batman':
        return <BatmanLogo classes={listClasses.join(' ')} />;
      case 'wonderwoman':
        return <WonderWomanLogo classes={listClasses.join(' ')} />;
      case 'flash':
        return <FlashLogo classes={listClasses.join(' ')} />;
      case 'greenlantern':
        return <GreenLanternLogo classes={listClasses.join(' ')} />;
      case 'greenarrow':
        return <GreenArrowLogo classes={listClasses.join(' ')} />;
      case 'aquaman':
        return <AquamanLogo classes={listClasses.join(' ')} />;
      case 'cyborg':
        return <CyborgLogo classes={listClasses.join(' ')} />;
      default:
        return <SupermanLogo classes={listClasses.join(' ')} />;
    }
  }
}

const mapStateToProps = state => ({
  isFirstUserTime: state.globalRdc.isFirstUserTime,
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters,
  inDirection: state.directionsMenuRdc.inDirectionMenu,
  outDirection: state.directionsMenuRdc.outDirectionMenu
});

const mapDispatchToProps = dispatch => ({
  activeOverMenuLettersHandler: () => dispatch(activeOverMenuLetters())
});

SuperheroLogo.propTypes = {
  isFirstUserTime: PropTypes.bool.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired,
  activeOverMenuLettersHandler: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperheroLogo);
