import React, { useState, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { getUserData } from '../../../api/index.js';
import { RegistrationForm } from '../Registration/';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  const [customer, setCustomer] = useState(null);
  console.log(customer);
  const [groomer, setGroomer] = useState(null);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        console.log(info);
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          getUserData().then(response => {
            const existingCustomer = response['customers'].filter(
              user => user.email === info.email
            );
            const existingGroomer = response['groomers'].filter(
              user => user.email === info.email
            );
            if (existingCustomer.length === 1) {
              setCustomer(existingCustomer);
            }
            if (existingGroomer.length === 1) {
              setGroomer(existingGroomer);
            }
          });
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo ? (
        <LoadingComponent message="Fetching user profile..." />
      ) : authState.isAuthenticated && userInfo && customer ? (
        <Redirect to={'/customer-dashboard'} />
      ) : authState.isAuthenticated && userInfo && groomer ? (
        <Redirect to={'/groomer-dashboard'} />
      ) : userInfo ? (
        <RegistrationForm email={userInfo.email} />
      ) : (
        <h1>nope</h1>
      )}
    </>
  );
}

export default HomeContainer;
