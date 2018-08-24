import React from 'react';
import Wrapper from '../hoc/Wrapper';
import Background from '../components/MenuCharacters/Background/Background';
import Letters from '../components/MenuCharacters/LettersCharacter';
import LogoCharacter from '../components/MenuCharacters/LogoCharacter';

const MenuCharactersWrapper = () => {
  const superheroes = [
    {
      name: 'SUPERMAN',
      id: 'a1s',
      isVisible: true
    } /* ,
    { name: 'BATMAN', id: 'a2f', isVisible: false },
    { name: 'WONDER WOMAN', id: 'a3r', isVisible: false },
    { name: 'GREEN LANTERN', id: 'a4p', isVisible: false },
    { name: 'GREEN ARROW', id: 'a5m', isVisible: false } */
  ];

  return (
    <div className="menuCharacters_wrapper">
      <Background />
      {superheroes.map(superhero => (
        <Wrapper key={superhero.id}>
          <Letters txt={superhero.name} isVisible={superhero.isVisible} />
          <LogoCharacter />
        </Wrapper>
      ))}
    </div>
  );
};

export default MenuCharactersWrapper;
