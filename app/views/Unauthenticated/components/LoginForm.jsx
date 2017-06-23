import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SuccessButton from '../../common/buttons/SuccessButton';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" /> <br />
          <SuccessButton text="Log In" /> <br />
        </form>
        <Link to="/" > Signup </Link>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  handleSubmit: () => {},
};
