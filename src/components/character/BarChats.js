import React from 'react';
import PropTypes from 'prop-types';

const BarChats = ({ value }) => (
  <div className="bar">
    <i style={{ width: `${value}%` }} />
  </div>
);

BarChats.propTypes = {
  value: PropTypes.number,
};

export default BarChats;
