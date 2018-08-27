import * as actionTypes from '../../actions';

const initialState = {
  isActiveOverMenuLetters: false,
  isActiveMenuLettersAnimation: false,
  inDirectionMenuLetters: null,
  outDirectionMenuLetters: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVE_OVER_MENU_LETTERS:
      return {
        ...state,
        isActiveOverMenuLetters: true
      };
      break;
    case actionTypes.DESACTIVE_OVER_MENU_LETTERS:
      return {
        ...state,
        isActiveOverMenuLetters: false
      };
      break;
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
