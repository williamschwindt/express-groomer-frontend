import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';
// import '../../'

const Registration = props => {
  return (
    <div className="register">
      <h2>Are you a...</h2>
      <Button className="register-groomer-button">
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
      </Button>
      <Button className="register-customer-button">
        <Link
          to={{
            pathname: 'customers',
            state: {
              email: props.email,
            },
          }}
        >
          Customer
        </Link>
      </Button>
    </div>
  );
};

export default Registration;
