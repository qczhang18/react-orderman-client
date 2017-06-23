import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import UnauthenticatedContainer from './Unauthenticated/UnauthenticatedContainer';
// import Logo from './common/logos/Logo';

const history = createHashHistory();

export default class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route to="/" component={UnauthenticatedContainer} />
        </Switch>
      </Router>
    );
  }
}
