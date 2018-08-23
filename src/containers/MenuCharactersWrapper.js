import React from 'react';
import Background from '../components/MenuCharacters/Background/Background';
import Letters from '../components/MenuCharacters/LettersCharacter';
import Logo from '../components/MenuCharacters/LogoCharacter';

const MenuCharactersWrapper = () => (
  <div className="menuCharacters_wrapper">
    <Background />
    <Letters />
    <Logo />
  </div>
);

export default MenuCharactersWrapper;
