import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';

export default class UnauthenticatedContainer extends Component {

  constructor(props) {
    super(props);

    this.login = (e) => {
      e.preventDefault();
    };

    this.signup = (e) => {
      e.preventDefault();
    };
  }

  render() {
    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <SignupForm {...props} handleSubmit={this.signup} />}
          />
          <Route
            path="/login"
            render={props => <LoginForm {...props} handleSubmit={this.login} />}
          />
        </Switch>
      </UnauthenticatedLayout>
    );
  }
}
