import React from 'react';

import { BackButton } from './GoBackBtn.styled';

const GoBackBtn = ({ location, children }) => {

  return <BackButton to={location.current}>{children}</BackButton>;
};

export default GoBackBtn;
