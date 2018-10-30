import React from 'react';
import Background from '../../../components/menu/Background';

const BackgroundWrapper = ({ list }) =>
  list.map(superhero => (
    <Background
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

export default BackgroundWrapper;
