import * as actionTypes from '../../actionTypes';

const initialState = {
  isFirstUserTime: true,
  isActiveOverMenuLetters: false,
  isActiveMenuLettersAnimation: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVE_OVER_MENU_LETTERS:
      return {
        ...state,
        isActiveOverMenuLetters: true
      };
    case actionTypes.DESACTIVE_OVER_MENU_LETTERS:
      return {
        ...state,
        isActiveOverMenuLetters: false
      };
    case actionTypes.ANIMATION_MENU_LETTERS_OVER:
      return {
        ...state,
        isActiveMenuLettersAnimation: true
      };
    case actionTypes.ANIMATION_MENU_LETTERS_OUT:
      return {
        ...state,
        isActiveMenuLettersAnimation: false
      };
    default:
      return state;
  }
};

export default reducer;
