import * as actionTypes from '../../actionTypes';

export const setDirectionIn = direction => ({
  type: actionTypes.SET_DIRECTION_IN_MENU,
  direction
});

export const setDirectionOut = direction => ({
  type: actionTypes.SET_DIRECTION_OUT_MENU,
  direction
});
