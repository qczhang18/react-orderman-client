import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import UnauthenticatedContainer from './Unauthenticated/UnauthenticatedContainer';

export default class Routes extends Component {

  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={UnauthenticatedContainer} />
        </Switch>
      </Router>
    );
  }
}
