import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form >
          <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" /> <br />
        </form>
        <Link to="/" > Signup </Link>
      </div>
    );
  }
}
