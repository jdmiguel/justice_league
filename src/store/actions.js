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

export const setMenuDirection = (dispatch, menuDirection) => {
  dispatch({
    type: actionTypes.SET_MENU_DIRECTION,
    menuDirection
  });
};

export const setMenuState = (dispatch, menuState) => {
  console.log('setMenuState action: ', menuState);
  dispatch({
    type: actionTypes.SET_MENU_STATE,
    menuState
  });
};
