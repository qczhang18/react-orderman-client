import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <form >
        <input type="text" placeholder="username" /> <br />
        <input type="text" placeholder="password" /> <br />
        <input className="btn btn-success" type="submit" value="Submit" />
      </form>
    );
  }
}
