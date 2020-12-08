import React, { useEffect, useState } from 'react';
import { RenderCustomerProfile } from './RenderCustomerProfile';
import { connect } from 'react-redux';
import { getCustomerInfo } from '../../../api/index';
import { updateCustomer } from '../../../api/index';

const CustomerProfileContainer = props => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const [message, setMessage] = useState('');

  const { getCustomerInfo } = props;
  const customerId = localStorage.getItem('customerId');

  useEffect(() => {
    getCustomerInfo(customerId);
  }, [getCustomerInfo, customerId]);

  const handleChange = e => {
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    for (let input in profileInfo) {
      if (input !== 'photo_url') {
        let value = profileInfo[input];
        value = value.replace(/^\s+/, '').replace(/\s+$/, '');
        if (value === '') {
          return false;
        }
      }
    }
    return true;
  };

  const updateProfile = data => {
    if (validateForm()) {
      props.updateCustomer(data, customerId);
    } else {
      setMessage('This field is required');
    }
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

  const showAboutModal = () => {
    setAboutModalVisible(true);
  };

  const handleAboutModalClose = () => {
    setAboutModalVisible(false);
  };

  if (props.customer && props.customer.hasOwnProperty('name')) {
    return (
      <RenderCustomerProfile
        contactModalVisible={contactModalVisible}
        showContactModal={showContactModal}
        handleContactModalClose={handleContactModalClose}
        profileModalVisible={profileModalVisible}
        showProfileModal={showProfileModal}
        handleProfileModalClose={handleProfileModalClose}
        aboutModalVisible={aboutModalVisible}
        showAboutModal={showAboutModal}
        handleAboutModalClose={handleAboutModalClose}
        customer={props.customer}
        updateProfile={updateProfile}
        error={props.error}
        status={props.status}
        profileInfo={profileInfo}
        setProfileInfo={setProfileInfo}
        message={message}
        setMessage={setMessage}
        handleChange={handleChange}
        validateForm={validateForm}
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
    customer: state.customerReducer.customer,
    isFetching: state.customerReducer.isFetching,
    error: state.customerReducer.error,
    status: state.customerReducer.status,
  };
};

export default connect(mapStateToProps, { getCustomerInfo, updateCustomer })(
  CustomerProfileContainer
);
