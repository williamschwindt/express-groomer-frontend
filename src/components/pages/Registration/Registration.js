import React from 'react';
import { Link } from 'react-router-dom';

const Registration = props => {
  return (
    <div>
      <h2>Are you a...</h2>
      <Link
        to={{
          pathname: 'groomers',
          state: {
            email: props.email,
          },
        }}
      >
        Groomer
      </Link>
      <Link to="/customers">Customer</Link>
    </div>
  );
};

export default Registration;
