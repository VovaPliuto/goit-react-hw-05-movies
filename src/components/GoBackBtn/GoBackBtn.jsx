import React from 'react';
import PropTypes from 'prop-types';


import { BackButton } from './GoBackBtn.styled';

const GoBackBtn = ({ location, children }) => {

  return <BackButton to={location.current}>{children}</BackButton>;
};

export default GoBackBtn;

GoBackBtn.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}
