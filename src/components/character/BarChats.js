import React from 'react';
import PropTypes from 'prop-types';

const BarChats = ({ value }) => (
  <div className="bar">
    <i style={{ width: value * 2.95 }} />
  </div>
);

BarChats.propTypes = {
  value: PropTypes.number
};

export default BarChats;
