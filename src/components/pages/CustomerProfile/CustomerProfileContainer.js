import React, { useEffect, useState } from 'react';
import { RenderCustomerProfile } from './RenderCustomerProfile';
import { connect } from 'react-redux';
import { getCustomerInfo } from '../../../api/index';

const CustomerProfileContainer = props => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const { getCustomerInfo } = props;

  useEffect(() => {
    getCustomerInfo(localStorage.getItem('customerId'));
  }, [getCustomerInfo]);

  console.log(props);

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
      customer={props.customer}
      isFetching={props.isFetching}
      error={props.error}
    />
  );
};

const mapStateToProps = state => {
  return {
    customer: state.customerReducer.customer,
    isFetching: state.customerReducer.isFetching,
    error: state.customerReducer.error,
  };
};

export default connect(mapStateToProps, { getCustomerInfo })(
  CustomerProfileContainer
);
