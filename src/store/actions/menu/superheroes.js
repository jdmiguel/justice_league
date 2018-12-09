import * as actionTypes from '../../actionTypes';

const getTotalSuperheroes = list => list.length - 1;

const resetHandlerCounterActivateSuperheroes = (counter, limitMax) => {
  let counterValue = counter;

  if (counterValue < 0) counterValue = limitMax;
  if (counterValue > limitMax) counterValue = 0;

  return counterValue;
};

const updateHandlerCounterActivateSuperheroes = (
  superHeroData,
  elementToActive
) => {
  const { superheroesList, counterActivateSuperhero } = superHeroData;
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
  const listUpdated = list.map(listElement => {
    const currentListElement = listElement;
    currentListElement.active = false;
    return listElement;
  });

  listUpdated[updatedCounter].active = true;

  return listUpdated;
};

const setActiveSuperhero = (data, activeElement) => {
  const updateCounterActivateSuperheroes = updateHandlerCounterActivateSuperheroes(
    data,
    activeElement
  );

  const updateSuperheroesList = updateHandlerSuperheroesList(
    data.superheroesList,
    updateCounterActivateSuperheroes
  );

  return {
    type: actionTypes.SET_ACTIVE_SUPERHERO_MENU,
    superheroesList: updateSuperheroesList,
    superheroSelected: updateCounterActivateSuperheroes
  };
};

const setSuperheroActiveCounter = superheroesList => {
  const counterUpdated = superheroesList.findIndex(item => item.active);

  return {
    type: actionTypes.SET_COUNTER_VALUE_ACTIVE_SUPERHERO_MENU,
    counter: counterUpdated
  };
};

export { setActiveSuperhero, setSuperheroActiveCounter };
