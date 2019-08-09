import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Layout from './components/layout';
// import Intro from './components/intro';
import Menu from './components/menu/index';
import Character from './components/character/index';

const App = () => (
  // State
  // const [introStatus, setIntroStatus] = useState(true);

  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Layout>
            <Menu />
          </Layout>
        )}
      />
      <Route
        exact
        path="/:character"
        render={props => (
          <Layout>
            <Character {...props} />
          </Layout>
        )}
      />
    </Switch>
  </Router>
);
export default hot(module)(App);
