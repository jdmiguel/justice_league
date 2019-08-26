import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Letters from './Letters';

/** Models */
import { superheroesModel } from '../../../utils/models';

const LettersWrapper = ({
  superheroes,
  menuDirection,
  overLetters,
  endLettersAnimation,
  onClick
}) =>
  superheroes.map(superhero => (
    <Letters
      key={superhero.name}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpoint={superhero.breakpoint}
      menuDirection={menuDirection}
      overLetters={overLetters}
      endLettersAnimation={endLettersAnimation}
      onClick={onClick}
    />
  ));

LettersWrapper.propTypes = {
  superheroes: superheroesModel,
  overLetters: PropTypes.func,
  endLettersAnimation: PropTypes.func,
  onClick: PropTypes.func
};

export default LettersWrapper;
