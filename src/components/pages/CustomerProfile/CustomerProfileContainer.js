import React, { useState } from 'react';
import { RenderCustomerProfile } from './RenderCustomerProfile';

const CustomerProfileContainer = () => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);

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
    <RenderCustomerProfile
      contactModalVisible={contactModalVisible}
      showContactModal={showContactModal}
      handleContactModalClose={handleContactModalClose}
      profileModalVisible={profileModalVisible}
      showProfileModal={showProfileModal}
      handleProfileModalClose={handleProfileModalClose}
    />
  );
};

export default CustomerProfileContainer;
