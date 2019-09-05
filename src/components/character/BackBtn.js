import React from 'react';
import PropTypes from 'prop-types';

const BackBtn = ({ onClick }) => (
  <div className="character-btn-back">
    <button type="button" onClick={onClick}>
      BACK TO HOME
    </button>
  </div>
);

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BackBtn;
