import React, { useState } from 'react';
import { RenderGroomerProfile } from './RenderGroomerProfile';

const GroomerProfileContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleClose = e => {
    setModalVisible(false);
  };

  return (
    <RenderGroomerProfile
      modalVisible={modalVisible}
      showModal={showModal}
      handleClose={handleClose}
    />
  );
};

export default GroomerProfileContainer;
