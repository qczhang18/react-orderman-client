import React from 'react';
import PropTypes from 'prop-types';

const SuccessButton = props => (
  <button type="submit" className="btn btn-success">{props.text}</button>
  );


export default SuccessButton;

SuccessButton.propTypes = {
  text: PropTypes.string,
};

SuccessButton.defaultProps = {
  text: '',
};
