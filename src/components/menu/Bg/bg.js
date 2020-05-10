import React from 'react';
import PropTypes from 'prop-types';

const Bg = ({ superheroClass, superheroActive, highlightBg }) => {
  const [classes, setClasses] = React.useState([
    'menu-bg',
    `${superheroClass}`,
  ]);
  const [isFirstBg, setIsFirstBg] = React.useState(true);

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
      setIsFirstBg(false);
    } else if (!isFirstBg) {
      setClasses(classes.filter(item => item !== 'highlight'));
    }
  }, [highlightBg]);

  return <div className={classes.join(' ')} />;
};

Bg.propTypes = {
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool,
  highlightBg: PropTypes.bool,
};

export default Bg;
