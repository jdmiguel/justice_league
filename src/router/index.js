import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../containers/menu';
import SectionCharacter from '../containers/sectionCharacter';

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
