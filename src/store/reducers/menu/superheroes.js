import * as actionTypes from '../../actions';

const initialState = {
  superheroesList: [
    {
      name: 'superman',
      class: 'superman',
      active: true,
      id: '012b'
    },
    {
      name: 'batman',
      class: 'batman',
      active: false,
      id: '024ee'
    },
    {
      name: 'wonder woman',
      class: 'wonderwoman',
      active: false,
      id: '034pl'
    },
    {
      name: 'flash',
      class: 'flash',
      active: false,
      id: '0021fg'
    },
    {
      name: 'green lantern',
      class: 'greenlantern',
      active: false,
      id: '077df'
    },
    {
      name: 'green arrow',
      class: 'greenarrow',
      active: false,
      id: '34jafd'
    }
  ],

  counterActivateSuperhero: 0
};

const getTotalSuperheroes = list => list.length - 1;

const resetHandlerCounterActivateSuperheroes = (counter, limitMax) => {
  let counterValue = counter;

  if (counterValue < 0) counterValue = limitMax;
  if (counterValue > limitMax) counterValue = 0;

  return counterValue;
};

const updateHandlerCounterActivateSuperheroes = (state, elementToActive) => {
  const { superheroesList, counterActivateSuperhero } = state;
  const totalSuperHeroes = getTotalSuperheroes(superheroesList);

  let counter = counterActivateSuperhero;

  if (elementToActive === 'next') counter += 1;
  else counter -= 1;

  const resetCounter = resetHandlerCounterActivateSuperheroes(
    counter,
    totalSuperHeroes
  );

  return resetCounter;
};

const updateHandlerSuperheroesList = (list, updatedCounter) => {
  const updatedList = [...list];

  updatedList.forEach(listElement => {
    const currentListElement = listElement;
    currentListElement.active = false;
  });

  updatedList[updatedCounter].active = true;

  return updatedList;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_SUPERHERO_MENU: {
      const updateCounterActivateSuperheroes = updateHandlerCounterActivateSuperheroes(
        state,
        action.active
      );

      const updateSuperheroesList = updateHandlerSuperheroesList(
        state.superheroesList,
        updateCounterActivateSuperheroes
      );

      return {
        ...state,
        superheroesList: updateSuperheroesList,
        counterActivateSuperhero: updateCounterActivateSuperheroes
      };
    }

    default:
      return state;
  }
};

export default reducer;
