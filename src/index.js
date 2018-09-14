import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './scss/styles.scss';

import App from './containers/App';
import globalReducer from './store/reducers/global';
import introReducer from './store/reducers/intro';
import directionsMenuReducer from './store/reducers/menu/directions';
import lettersMenuReducer from './store/reducers/menu/letters';
import superheroesMenuReducer from './store/reducers/menu/superheroes';

const rootReducer = combineReducers({
  globalRdc: globalReducer,
  introRdc: introReducer,
  directionsMenuRdc: directionsMenuReducer,
  lettersMenuRdc: lettersMenuReducer,
  superheroesMenuRdc: superheroesMenuReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
