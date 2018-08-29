import * as actionTypes from '../../actions';

const initialState = {
  isActiveOverMenuLetters: false,
  isActiveMenuLettersAnimation: false,
  inDirectionMenuLetters: '',
  outDirectionMenuLetters: ''
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
    case actionTypes.MENU_LOGO_ANIMATION_IN:
      return {
        ...state,
        isActiveMenuLettersAnimation: true
      };
    case actionTypes.MENU_LOGO_ANIMATION_OUT:
      return {
        ...state,
        isActiveMenuLettersAnimation: false
      };
    case actionTypes.SET_IN_DIRECTION_MENU_LETTERS:
      return {
        ...state,
        inDirectionMenuLetters: action.direction
      };
    case actionTypes.SET_OUT_DIRECTION_MENU_LETTERS:
      return {
        ...state,
        outDirectionMenuLetters: action.direction
      };
    default:
      return state;
  }
};

export default reducer;
