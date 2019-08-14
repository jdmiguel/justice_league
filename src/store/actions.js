import * as actionTypes from './actionTypes';

export const setActiveSuperhero = (dispatch, superheroes, index) => {
  const superheroesUpdated = superheroes.map(item => ({
    ...item,
    active: index === item.index
  }));

  dispatch({
    type: actionTypes.SET_ACTIVE_SUPERHERO,
    superheroes: superheroesUpdated
  });
};
