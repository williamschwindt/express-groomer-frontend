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

  return (
    <RenderGroomerProfile
      contactModalVisible={contactModalVisible}
      showContactModal={showContactModal}
      handleContactModalClose={handleContactModalClose}
      profileModalVisible={profileModalVisible}
      showProfileModal={showProfileModal}
      handleProfileModalClose={handleProfileModalClose}
      groomer={props.groomer}
      isFetching={props.isFetching}
      error={props.error}
    />
  );
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
