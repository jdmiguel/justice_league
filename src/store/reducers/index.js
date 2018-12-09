import { combineReducers } from 'redux';
import globalReducer from './global';
import directionsMenuReducer from './menu/directions';
import lettersMenuReducer from './menu/letters';
import superheroesMenuReducer from './menu/superheroes';

const rootReducer = combineReducers({
  globalRdc: globalReducer,
  directionsMenuRdc: directionsMenuReducer,
  lettersMenuRdc: lettersMenuReducer,
  superheroesMenuRdc: superheroesMenuReducer
});

export default rootReducer;
