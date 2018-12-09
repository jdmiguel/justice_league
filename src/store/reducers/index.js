import { combineReducers } from 'redux';
import globalReducer from './global';
import directionsMenuReducer from './menu/directions';
import lettersMenuReducer from './menu/letters';
import superheroesMenuReducer from './menu/superheroes';
import sidedrawerMenuReducer from './menu/sidedrawer';

const rootReducer = combineReducers({
  globalRdc: globalReducer,
  directionsMenuRdc: directionsMenuReducer,
  lettersMenuRdc: lettersMenuReducer,
  superheroesMenuRdc: superheroesMenuReducer,
  sidedrawerMenuRdc: sidedrawerMenuReducer
});

export default rootReducer;
