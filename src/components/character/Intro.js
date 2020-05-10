import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({ txt }) => (
  <div className="character-intro">
    <p>{txt}</p>
  </div>
);

Intro.propTypes = {
  txt: PropTypes.string,
};

export default Intro;
