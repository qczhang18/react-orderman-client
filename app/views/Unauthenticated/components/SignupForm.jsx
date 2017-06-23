import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <form >
          <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" /> <br />
        </form>
        <Link to="login"> Login </Link>
      </div>
    );
  }
}
