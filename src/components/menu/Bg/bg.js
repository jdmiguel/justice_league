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
      setClasses(state => [...state, 'active']);
    } else {
      setClasses(state =>
        state.filter(item => item !== 'active' && item !== 'highlight'),
      );
    }
  }, [superheroActive]);

  React.useEffect(() => {
    if (highlightBg && superheroActive) {
      setClasses(state => [...state, 'highlight']);
      setIsFirstBg(false);
    } else if (!isFirstBg) {
      setClasses(state => state.filter(item => item !== 'highlight'));
    }
  }, [highlightBg, isFirstBg, superheroActive]);

  return <div className={classes.join(' ')} />;
};

Bg.propTypes = {
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool,
  highlightBg: PropTypes.bool,
};

export default Bg;
