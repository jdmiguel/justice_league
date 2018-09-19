import React from 'react';
import Letters from './Letters';

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

export default LettersWrapper;
