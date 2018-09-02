import React from 'react';
import Letters from '../../components/menu/LettersCharacter';

const MenuLettersWrapper = ({ list }) =>
  list.map(superhero => (
    <Letters
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpointCharacter={superhero.breakpointCharacter}
    />
  ));

export default MenuLettersWrapper;
