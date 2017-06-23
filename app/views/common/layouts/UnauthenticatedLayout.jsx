import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../logos/Logo';

export default class UnauthenticatedLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Logo />
        {this.props.children}
      </div>
    );
  }
}

UnauthenticatedLayout.propTypes = {
  children: PropTypes.object,
};

UnauthenticatedLayout.defaultProps = {
  children: {},
};
