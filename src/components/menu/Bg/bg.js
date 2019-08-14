import React from 'react';
import PropTypes from 'prop-types';

const Bg = ({ superheroClass, superheroActive }) => {
  const [classes, setClasses] = React.useState([
    'menu-bg',
    `${superheroClass}`
  ]);

  React.useEffect(() => {
    if (superheroActive) {
      setClasses([...classes, 'active']);
    } else {
      setClasses(classes.filter(item => item !== 'active'));
    }
  }, [superheroActive]);

  // if (superheroActive && isActiveMenuLettersAnimation) {
  // listClasses.push('highlight');
  // }

  return <div className={classes.join(' ')} />;
};

Bg.propTypes = {
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool
};

export default Bg;
