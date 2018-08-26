import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './scss/styles.scss';

import App from './containers/App';
import lettersMenuReducer from './store/reducers/menu/letters';
import superheroesMenuReducer from './store/reducers/menu/superheroes';

const rootReducer = combineReducers({
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
