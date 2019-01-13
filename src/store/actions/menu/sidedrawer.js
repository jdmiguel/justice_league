import * as actionTypes from '../../actionTypes';

const setSelectedSidedrawerItem = itemSelected => ({
  type: actionTypes.SET_SELECTED_SIDEDRAWER_ITEM,
  itemSelected
});

export { setSelectedSidedrawerItem };
