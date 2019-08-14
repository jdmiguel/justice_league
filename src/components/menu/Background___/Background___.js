import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Background = ({
  superheroActive,
  superheroClass,
  isActiveMenuLettersAnimation
}) => {
  const listClasses = ['menuCharacters_background', `${superheroClass}`];

  if (superheroActive) {
    listClasses.push('active');
  }
  if (superheroActive && isActiveMenuLettersAnimation) {
    listClasses.push('highlight');
  }

  return <div className={listClasses.join(' ')} />;
};

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation
});

Background.propTypes = {
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Background);
