import React from 'react';
import Bg from '../../components/menu/Background';

const MenuBgsWrapper = ({ list }) =>
  list.map(superhero => (
    <Bg
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

export default MenuBgsWrapper;
