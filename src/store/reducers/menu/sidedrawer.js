import * as actionTypes from '../../actionTypes';

const initialState = {
  selectedSideDrawerItem: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_SIDEDRAWER_ITEM:
      return {
        ...state,
        selectedSideDrawerItem: action.itemSelected
      };

    default:
      return state;
  }
};

export default reducer;
