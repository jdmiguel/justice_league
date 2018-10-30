import React from 'react';
import PropTypes from 'prop-types';
import Letters from '../../../containers/menu/Letters';

const LettersWrapper = ({ list }) =>
  list.map(superhero => (
    <Letters
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpointCharacter={superhero.breakpointCharacter}
    />
  ));

LettersWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LettersWrapper;
