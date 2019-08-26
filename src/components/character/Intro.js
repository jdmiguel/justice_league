import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({ txt }) => <p>{txt}</p>;

Intro.propTypes = {
  txt: PropTypes.string
};

export default Intro;
