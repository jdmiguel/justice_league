import * as actionTypes from '../actions';

const initialState = {
  isActiveLettersAnim: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IN_LOGO_ANIMATION:
      return {
        ...state,
        isActiveLettersAnim: true
      };
      break;
    case actionTypes.OUT_LOGO_ANIMATION:
      return {
        ...state,
        isActiveLettersAnim: false
      };
      break;
  }
  return state;
};

export default reducer;
