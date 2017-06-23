import React, { Component } from 'react';
import Logo from '../common/logos/Logo';
import SuccessButton from '../common/buttons/SuccessButton';
import LoginForm from './components/LoginForm';

export default class UnauthenticatedContainer extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SuccessButton />
        <LoginForm />
      </div>
    );
  }
}
