import * as actionTypes from '../../actions';

const initialState = {
  superheroesList: [
    {
      name: 'superman',
      class: 'superman',
      active: true,
      breakpointCharacter: 4,
      id: '012b'
    },
    {
      name: 'batman',
      class: 'batman',
      active: false,
      breakpointCharacter: 2,
      id: '024ee'
    },
    {
      name: 'WonderWoman',
      class: 'wonderwoman',
      active: false,
      breakpointCharacter: 5,
      id: '034pl'
    },
    {
      name: 'flash',
      class: 'flash',
      active: false,
      breakpointCharacter: 2,
      id: '0021fg'
    },
    {
      name: 'GreenLantern',
      class: 'greenlantern',
      active: false,
      breakpointCharacter: 5,
      id: '077df'
    },
    {
      name: 'GreenArrow',
      class: 'greenarrow',
      active: false,
      breakpointCharacter: 5,
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
