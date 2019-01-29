import React from 'react';
import PropTypes from 'prop-types';
import Letters from '../../../components/menu/Letters';

const LettersWrapper = ({ list, onClick }) =>
  list.map(superhero => (
    <Letters
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpointCharacter={superhero.breakpointCharacter}
      onClick={onClick}
    />
  ));

LettersWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired
};

export default LettersWrapper;
