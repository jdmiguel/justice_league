import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { activeOverMenuLetters } from '../../../store/actions/menu/letters';

import SupermanLogo from '../../../components/menu/Logo/SupermanLogo';
import BatmanLogo from '../../../components/menu/Logo/BatmanLogo';
import WonderWomanLogo from '../../../components/menu/Logo/WonderWomanLogo';
import FlashLogo from '../../../components/menu/Logo/FlashLogo';
import GreenLanternLogo from '../../../components/menu/Logo/GreenLanternLogo';
import GreenArrowLogo from '../../../components/menu/Logo/GreenArrowLogo';
import AquamanLogo from '../../../components/menu/Logo/AquamanLogo';
import CyborgLogo from '../../../components/menu/Logo/CyborgLogo';
import { introLogoMenu } from '../../../utils/animations';

class LogoContainer extends Component {
  componentDidMount() {
    const { activeOverMenuLettersHandler } = this.props;
    const logoPath = document.querySelectorAll('.superheroLogo_svg');

    introLogoMenu(logoPath, activeOverMenuLettersHandler);
  }

  render() {
    const {
      superheroActive,
      superheroClass,
      isActiveMenuLettersAnimation
    } = this.props;

    const listClasses = ['menuCharacters_logo', `${superheroClass}`];

    if (superheroActive) listClasses.push('active');
    if (superheroActive && isActiveMenuLettersAnimation)
      listClasses.push('highlight');

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
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters,
  inDirection: state.directionsMenuRdc.inDirectionMenu,
  outDirection: state.directionsMenuRdc.outDirectionMenu
});

const mapDispatchToProps = dispatch => ({
  activeOverMenuLettersHandler: () => dispatch(activeOverMenuLetters())
});

LogoContainer.propTypes = {
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired,
  activeOverMenuLettersHandler: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoContainer);
