import * as actionTypes from '../actionTypes';

const initialState = {
  isFirstUserTime: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_END_FIRST_USER_TIME:
      return {
        ...state,
        isFirstUserTime: false
      };
    default:
      return state;
  }
};

export default reducer;
