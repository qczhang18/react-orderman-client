import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SuccessButton from '../../common/buttons/SuccessButton';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} >
          <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" /> <br />
          <SuccessButton text="Sign Up" /> <br />
        </form>
        <Link to="login"> Login </Link>
      </div>
    );
  }
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
};

SignupForm.defaultProps = {
  handleSubmit: () => {},
};
