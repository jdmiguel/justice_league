import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({ txt }, ref) => (
  <div ref={ref} className="character-intro">
    <p>{txt}</p>
  </div>
);

Intro.propTypes = {
  txt: PropTypes.string
};

export default React.forwardRef(Intro);
