import React from 'react';
import { ReactPropTypes } from 'react';

const Error = ({ message }) => {
  return <div>{message}</div>;
};

Error.ReactPropTypes = {
  message: ReactPropTypes.string,
};

Error.defaultProps = {
  message: 'An Error Occurred',
};
export default Error;
