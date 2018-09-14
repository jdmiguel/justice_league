import * as actionTypes from '../../actions';

const initialState = {
  setEndIntro: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_END_INTRO:
      return {
        ...state,
        setEndIntro: true
      };
    default:
      return state;
  }
};

export default reducer;
