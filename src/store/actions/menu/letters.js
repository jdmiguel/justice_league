import * as actionTypes from '../../actionTypes';

const activeOverMenuLetters = () => ({
  type: actionTypes.ACTIVE_OVER_MENU_LETTERS
});

const setAnimationMenuLettersOver = () => ({
  type: actionTypes.ANIMATION_MENU_LETTERS_OVER
});

const setAnimationMenuLettersOut = () => ({
  type: actionTypes.ANIMATION_MENU_LETTERS_OUT
});

export {
  activeOverMenuLetters,
  setAnimationMenuLettersOver,
  setAnimationMenuLettersOut
};
