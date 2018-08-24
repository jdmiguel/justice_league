import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import Background from '../../components/menu/Background/Background';
import Letters from '../../components/menu/LettersCharacter';
import LogoCharacter from '../../components/menu/LogoCharacter';

const MenuCharactersWrapper = () => {
  const superheroes = [
    {
      name: 'Superman',
      id: 'a1s',
      class: 'superman',
      isVisible: true
    },
    {
      name: 'Batman',
      id: 'a2f',
      class: 'batman',
      isVisible: false
    }
    /*
    { name: 'WONDER WOMAN', id: 'a3r', isVisible: true },
    { name: 'GREEN LANTERN', id: 'a4p', isVisible: true },
    { name: 'GREEN ARROW', id: 'a5m', isVisible: true } */
  ];

  return (
    <div className="menuCharacters_wrapper">
      <Background />
      {superheroes.map(superhero => (
        <Wrapper key={superhero.id}>
          <Letters
            txt={superhero.name}
            isVisible={superhero.isVisible}
            classSuperHero={superhero.class}
          />
          <LogoCharacter isVisible={superhero.isVisible} />
        </Wrapper>
      ))}
    </div>
  );
};

export default MenuCharactersWrapper;
