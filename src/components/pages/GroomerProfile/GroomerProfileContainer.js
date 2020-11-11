import React, { useState } from 'react';
import { RenderGroomerProfile } from './RenderGroomerProfile';

const GroomerProfileContainer = () => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const dummyData = {
    name: 'Tony',
    description:
      'Deleniti dolorem nam. Dolores libero omnis consequatur minus illo. Cum soluta tempore quod nemo placeat ratione saepe. Sit labore reprehenderit et laborum cumque corrupti.',
    lastname: 'Lang',
    address: 'Ave L',
    latitude: 31.82083005,
    longitude: -99.090166306,
    zip: '76801',
    phone: '2649864723',
    email: 'Norene45@gmail.com',
    city: 'Brownwood',
    state: 'Texas',
    country: 'USA',
    photo_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg',
  };

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
    <div>
      <RenderGroomerProfile
        contactModalVisible={contactModalVisible}
        showContactModal={showContactModal}
        handleContactModalClose={handleContactModalClose}
        profileModalVisible={profileModalVisible}
        showProfileModal={showProfileModal}
        handleProfileModalClose={handleProfileModalClose}
        dummyData={dummyData}
        latitude={dummyData.latitude}
        longitude={dummyData.longitude}
      />
    </div>
  );
};

export default GroomerProfileContainer;
