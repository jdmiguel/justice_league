import React from 'react';
import Logos from '../../components/menu/LogoCharacter';

const MenuLogosWrapper = ({ list }) =>
  list.map(superhero => (
    <Logos
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

export default MenuLogosWrapper;
