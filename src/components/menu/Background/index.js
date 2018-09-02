import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* 
  TASK: CREATE ARRAY WITH CLASSES MENUCHARACTERS_BACKGROUND, ACTIVE AND HIGHLIGHT
  AND CHANGING THE ARRAY DEPENDING ON SUPERHEROACTIVE, SUPERHEROCLASS AND
  ISACTIVEMENULETTERSANIMATIONS PROPS
*/

const Background = ({
  superheroActive,
  superheroClass,
  isActiveMenuLettersAnimation
}) => {
  const getBgClasses = () =>
    !superheroActive
      ? `menuCharacters_background ${superheroClass}`
      : `menuCharacters_background ${superheroClass} active`;

  return <div className={getBgClasses()} />;
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
