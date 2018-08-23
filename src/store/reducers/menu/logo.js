import * as actionTypes from '../../actions';

const initialState = {
  isActiveMenuLettersAnimation: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MENU_LOGO_ANIMATION_IN:
      return {
        ...state,
        isActiveMenuLettersAnimation: true
      };
      break;
    case actionTypes.MENU_LOGO_ANIMATION_OUT:
      return {
        ...state,
        isActiveMenuLettersAnimation: false
      };
      break;
    default:
      return state;
      break;
  }
  return state;
};

export default reducer;
