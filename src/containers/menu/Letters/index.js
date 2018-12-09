import React from 'react';
import PropTypes from 'prop-types';
import Letters from '../../../components/menu/Letters';

const LettersWrapper = ({ history, list }) =>
  list.map(superhero => (
    <Letters
      key={superhero.id}
      history={history}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpointCharacter={superhero.breakpointCharacter}
    />
  ));

LettersWrapper.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LettersWrapper;
