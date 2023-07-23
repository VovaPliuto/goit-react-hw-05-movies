import React from 'react';
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => {
  return <p>Something wrong. The error is: {error}. Please try again later.</p>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
}
