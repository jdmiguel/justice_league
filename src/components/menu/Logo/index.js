import React from 'react';
import Logo from './Logo';

const LogoWrapper = ({ list }) =>
  list.map(superhero => (
    <Logo
      key={superhero.id}
      superheroName={superhero.name}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

export default LogoWrapper;
