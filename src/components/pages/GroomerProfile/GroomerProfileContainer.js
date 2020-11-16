import React, { useEffect, useState } from 'react';
import { RenderGroomerProfile } from './RenderGroomerProfile';
import { connect } from 'react-redux';
import { getGroomerInfo } from '../../../api/index';

const GroomerProfileContainer = props => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const { getGroomerInfo } = props;

  useEffect(() => {
    getGroomerInfo(localStorage.getItem('groomerId'));
  }, [getGroomerInfo]);

  const showContactModal = () => {
    setContactModalVisible(true);
  };

  const handleContactModalClose = e => {
    setContactModalVisible(false);
  };

  const showProfileModal = () => {
    setProfileModalVisible(true);
  };

  const handleProfileModalClose = e => {
    setProfileModalVisible(false);
  };

  if (props.groomer && props.groomer.hasOwnProperty('name')) {
    return (
      <RenderGroomerProfile
        contactModalVisible={contactModalVisible}
        showContactModal={showContactModal}
        handleContactModalClose={handleContactModalClose}
        profileModalVisible={profileModalVisible}
        showProfileModal={showProfileModal}
        handleProfileModalClose={handleProfileModalClose}
        groomer={props.groomer}
      />
    );
  } else if (props.isFetching === true) {
    return <div>Loading</div>;
  } else {
    return <div>There was a problem loading this page</div>;
  }
};

const mapStateToProps = state => {
  return {
    groomer: state.groomerReducer.groomer,
    isFetching: state.groomerReducer.isFetching,
    error: state.groomerReducer.error,
  };
};

export default connect(mapStateToProps, { getGroomerInfo })(
  GroomerProfileContainer
);
