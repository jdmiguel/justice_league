import * as actionTypes from '../../actions';

const initialState = {
  superheroes: [
    { name: 'superman', isActive: true },
    { name: 'batman', isActive: false },
    { name: 'wonder woman', isActive: false },
    { name: 'flash', isActive: false },
    { name: 'green lantern', isActive: false },
    { name: 'green arrow', isActive: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_SUPERHERO_MENU:
      const limitNumSuperheroes = state.superheroes.length - 1;
      const superheroesUpdated = state.superheroes.map(
        (superhero, index, arr) => {
          /* console.log('superhero: ', superhero);
          console.log('index: ', index);
          console.log('arr: ', arr); */
          superhero.isActive = false;
          if (action.active === 'next' && index < limitNumSuperheroes) {
            arr[index++].isActive = true;
          }

          /* if (action.active === 'next') {
            if (index !== limitNumSuperheroes) arr[index++].isActive = true;
            else arr[0].isActive = true;
          } else if (index !== 0) arr[index--].isActive = true;
          else arr[limitNumSuperheroes].isActive = true;  */
        }
      );

      // console.log(superheroesUpdated);

      return {
        ...state /* ,
        superheroes: superheroesUpdated */
      };
      break;

    default:
      return state;
      break;
  }
  return state;
};

export default reducer;
