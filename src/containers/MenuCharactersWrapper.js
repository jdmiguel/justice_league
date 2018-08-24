import React from 'react';
import Wrapper from '../hoc/Wrapper';
import Background from '../components/MenuCharacters/Background/Background';
import Letters from '../components/MenuCharacters/LettersCharacter';
import LogoCharacter from '../components/MenuCharacters/LogoCharacter';

const MenuCharactersWrapper = () => {
  const superheroes = [
    {
      name: 'Superman',
      id: 'a1s',
      isVisible: true
    } /* ,
    { name: 'BATMAN', id: 'a2f', isVisible: true },
    { name: 'WONDER WOMAN', id: 'a3r', isVisible: true },
    { name: 'GREEN LANTERN', id: 'a4p', isVisible: true },
    { name: 'GREEN ARROW', id: 'a5m', isVisible: true } */
  ];

  return (
    <div className="menuCharacters_wrapper">
      <Background />
      {superheroes.map(superhero => (
        <Wrapper key={superhero.id}>
          <Letters txt={superhero.name} isVisible={superhero.isVisible} />
          <LogoCharacter isVisible={superhero.isVisible} />
        </Wrapper>
      ))}
    </div>
  );
};

export default MenuCharactersWrapper;
