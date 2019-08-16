import * as actionTypes from './actionTypes';

export const setActiveSuperhero = (dispatch, superheroes, index) => {
  const currentIndex = superheroes.find(item => item.active).index;
  const menuDirection =
    index > currentIndex
      ? { inHero: 'left', outHero: 'right' }
      : { inHero: 'right', outHero: 'left' };

  console.log('menuDirection: ', menuDirection);

  dispatch({
    type: actionTypes.SET_MENU_DIRECTION,
    menuDirection
  });

  const superheroesUpdated = superheroes.map(item => ({
    ...item,
    active: index === item.index
  }));

  dispatch({
    type: actionTypes.SET_ACTIVE_SUPERHERO,
    superheroes: superheroesUpdated
  });
};

export const setCurrentSuperheroCounter = (dispatch, superheroeCounter) => {
  dispatch({
    type: actionTypes.SET_CURRENT_SUPERHERO_COUNTER,
    superheroeCounter
  });
};
