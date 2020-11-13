import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { getUserData } from '../../../api/index.js';
import { RegistrationForm } from '../Registration/';

function HomeContainer(props) {
  const { authState, authService } = useOktaAuth();
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    props.getUserData(memoAuthService);
    // eslint-disable-next-line
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && props.isFetching ? (
        <props.LoadingComponent message="Fetching user profile..." />
      ) : authState.isAuthenticated &&
        props.oktaUser &&
        props.customer.length === 1 ? (
        <Redirect to={'/customer-dashboard'} />
      ) : authState.isAuthenticated &&
        props.oktaUser &&
        props.groomer.length === 1 ? (
        <Redirect to={'/groomer-dashboard'} />
      ) : props.oktaUser ? (
        <RegistrationForm email={props.oktaUser.email} />
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.usersReducer.isFetching,
    oktaUser: state.usersReducer.oktaUser,
    groomer: state.usersReducer.groomer,
    customer: state.usersReducer.customer,
  };
};

export default connect(mapStateToProps, { getUserData })(HomeContainer);
