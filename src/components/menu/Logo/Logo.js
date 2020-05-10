import React from 'react';
import PropTypes from 'prop-types';

/** Logos */
import SupermanLogo from './SupermanLogo';
import BatmanLogo from './BatmanLogo';
import WonderWomanLogo from './WonderWomanLogo';
import FlashLogo from './FlashLogo';
import GreenLanternLogo from './GreenLanternLogo';
import GreenArrowLogo from './GreenArrowLogo';
import AquamanLogo from './AquamanLogo';
import CyborgLogo from './CyborgLogo';

const Logo = ({ superheroActive, superheroClass, highlightBg, outLogo }) => {
  // States
  const [classes, setClasses] = React.useState([
    'menu-logo',
    `${superheroClass}`,
  ]);
  const [isFirstLogo, setIsFirstLogo] = React.useState(true);

  // UseEffects
  React.useEffect(() => {
    if (superheroActive) {
      setClasses([...classes, 'active']);
    } else {
      setClasses(
        classes.filter(item => item !== 'active' && item !== 'highlight'),
      );
    }
  }, [superheroActive]);

  React.useEffect(() => {
    if (highlightBg && superheroActive) {
      setClasses([...classes, 'highlight']);
      setIsFirstLogo(false);
    } else if (!isFirstLogo) {
      setClasses(classes.filter(item => item !== 'highlight'));
    }
  }, [highlightBg]);

  React.useEffect(() => {
    if (outLogo && superheroActive) {
      setClasses([...classes, 'out']);
    }
  }, [outLogo]);

  const getLogo = () => {
    switch (superheroClass) {
      case 'superman':
        return <SupermanLogo classes={classes.join(' ')} />;
      case 'batman':
        return <BatmanLogo classes={classes.join(' ')} />;
      case 'wonderwoman':
        return <WonderWomanLogo classes={classes.join(' ')} />;
      case 'flash':
        return <FlashLogo classes={classes.join(' ')} />;
      case 'greenlantern':
        return <GreenLanternLogo classes={classes.join(' ')} />;
      case 'greenarrow':
        return <GreenArrowLogo classes={classes.join(' ')} />;
      case 'aquaman':
        return <AquamanLogo classes={classes.join(' ')} />;
      case 'cyborg':
        return <CyborgLogo classes={classes.join(' ')} />;
      default:
        return <SupermanLogo classes={classes.join(' ')} />;
    }
  };

  return getLogo();
};

Logo.propTypes = {
  superheroActive: PropTypes.bool,
  superheroClass: PropTypes.string,
  highlightBg: PropTypes.bool,
  outLogo: PropTypes.bool,
};

export default Logo;
