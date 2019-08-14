import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

const App = () => {
  // State
  const [introStatus, setIntroStatus] = React.useState(false);

  return (
    <Router>
      {introStatus ? (
        <Intro endIntro={() => setIntroStatus(false)} />
      ) : (
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
            path="/:character"
            render={props => (
              <Layout>
                <Character {...props} />
              </Layout>
            )}
          />
        </Switch>
      )}
    </Router>
  );
};

export default hot(module)(App);
