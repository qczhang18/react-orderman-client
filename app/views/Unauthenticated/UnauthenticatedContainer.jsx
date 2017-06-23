import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import UnauthenticatedLayout from '../common/layouts/UnauthenticatedLayout';

export default class UnauthenticatedContainer extends Component {
  render() {
    return (
      <UnauthenticatedLayout>
        <Switch>
          <Route exact path="/" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </UnauthenticatedLayout>
    );
  }
}
