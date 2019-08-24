import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ superheroClass }) => (
  <div className={`character-container ${superheroClass}`}>
    <p>ESTE ES EL CHARACTER</p>
  </div>
);

Character.propTypes = {
  superheroClass: PropTypes.string
};

export default Character;
