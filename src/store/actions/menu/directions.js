import * as actionTypes from '../../actionTypes';

const setDirectionIn = direction => ({
  type: actionTypes.SET_DIRECTION_IN_MENU,
  direction
});

const setDirectionOut = direction => ({
  type: actionTypes.SET_DIRECTION_OUT_MENU,
  direction
});

export { setDirectionIn, setDirectionOut };
