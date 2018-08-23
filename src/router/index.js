import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Wrapper from '../hoc/Wrapper';
import MenuCharacters from '../containers/MenuCharacters';
import SectionCharacter from '../containers/SectionCharacter';

const history = createHistory();

const Router = () => (
  <HashRouter>
    <Wrapper>
      <Route history={history} exact path="/" component={MenuCharacters} />
      <Route history={history} path="/character" component={SectionCharacter} />
    </Wrapper>
  </HashRouter>
);

export default Router;
