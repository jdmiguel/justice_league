import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../containers/menu';
import SectionCharacter from '../containers/SectionCharacter';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={props => <Menu {...props} />} />
      <Route
        exact
        path="/character"
        render={props => <SectionCharacter {...props} />}
      />
    </Switch>
  </Router>
);
