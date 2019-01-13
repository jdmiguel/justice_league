import * as actionTypes from '../../actionTypes';

const initialState = {
  inDirectionMenu: '',
  outDirectionMenu: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DIRECTION_IN_MENU:
      return {
        ...state,
        inDirectionMenu: action.direction
      };
    case actionTypes.SET_DIRECTION_OUT_MENU:
      return {
        ...state,
        outDirectionMenu: action.direction
      };
    default:
      return state;
  }
};

export default reducer;
