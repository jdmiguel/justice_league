import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ superheroName, superheroClass, superheroActive, logoPath }) => {
  const getActiveClass = () => (superheroActive ? 'active' : null);

  return (
    <li className={getActiveClass()}>
      <img
        alt={superheroName}
        className={`sidedrawer_${superheroClass}`}
        src={logoPath}
      />
      <span className={`sidedrawer_${superheroClass}`}>{superheroName}</span>
    </li>
  );
};

Item.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  logoPath: PropTypes.string.isRequired
};

export default Item;
