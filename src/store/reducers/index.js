import { combineReducers } from 'redux';
import globalReducer from './global';
import directionsMenuReducer from './menu/directions';
import lettersMenuReducer from './menu/letters';
import superheroesMenuReducer from './menu/superheroes';
import characterReducer from './character';

const rootReducer = combineReducers({
  globalRdc: globalReducer,
  directionsMenuRdc: directionsMenuReducer,
  lettersMenuRdc: lettersMenuReducer,
  superheroesMenuRdc: superheroesMenuReducer,
  characterRdc: characterReducer
});

export default rootReducer;
