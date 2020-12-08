import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Input, Calendar } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export const RenderCustomerProfile = props => {
  const [profileInfo, setProfileInfo] = useState({});
  const [message, setMessage] = useState('');

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

  const handleSubmit = () => {
    if (validateForm()) {
      props.updateProfile(profileInfo);
    } else {
      setMessage('This field is required');
    }
  };

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  useEffect(() => {
    if (props.status === 'success') {
      props.handleProfileModalClose();
      props.handleAboutModalClose();
    }
    if (props.status === 'failure') {
      setMessage(props.error);
    }
  }, [props.customer, props.error, props.status]);

  return (
    <>
      <Modal
        title="Contact info"
        visible={props.contactModalVisible}
        onOk={props.handleContactModalClose}
        onCancel={props.handleContactModalClose}
        footer={[
          <Button key="back" onClick={props.handleContactModalClose}>
            Close
          </Button>,
        ]}
      >
        <p>Phone number: {props.customer.phone}</p>
        <p>Email: {props.customer.email}</p>
      </Modal>
      <Modal
        title="Edit profile"
        visible={props.profileModalVisible}
        onOk={props.handleProfileModalClose}
        onCancel={props.handleProfileModalClose}
        footer={[
          <p
            style={{ display: 'inline', marginRight: '20%', color: '#ec3944' }}
          >
            {message}
          </p>,
          <Button key="back" onClick={props.handleProfileModalClose}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Update
          </Button>,
        ]}
      >
        <form className="edit-profile-form">
          <Form.Item
            className="edit-profile-label"
            label="First Name"
            name="name"
          >
            <Input
              className="edit-profile-input"
              name="name"
              onChange={handleChange}
              placeholder={props.customer.name}
            />
          </Form.Item>
          <Form.Item
            className="edit-profile-label"
            label="Last Name"
            name="lastname"
          >
            <Input
              className="edit-profile-input"
              name="lastname"
              onChange={handleChange}
              placeholder={props.customer.lastname}
            />
          </Form.Item>
          <Form.Item
            className="edit-profile-label"
            label="Address"
            name="address"
          >
            <Input
              className="edit-profile-input"
              name="address"
              onChange={handleChange}
              placeholder={props.customer.address}
            />
          </Form.Item>
          <Form.Item className="edit-profile-label" label="Zip Code" name="zip">
            <Input
              className="edit-profile-input"
              name="zip"
              onChange={handleChange}
              placeholder={props.customer.zip}
            />
          </Form.Item>
          <Form.Item className="edit-profile-label" label="City" name="city">
            <Input
              className="edit-profile-input"
              name="city"
              onChange={handleChange}
              placeholder={props.customer.city}
            />
          </Form.Item>
          <Form.Item className="edit-profile-label" label="State" name="state">
            <Input
              className="edit-profile-input"
              name="state"
              onChange={handleChange}
              placeholder={props.customer.state}
            />
          </Form.Item>
          <Form.Item
            className="edit-profile-label"
            label="Country"
            name="country"
          >
            <Input
              className="edit-profile-input"
              name="country"
              onChange={handleChange}
              placeholder={props.customer.country}
            />
          </Form.Item>
          <Form.Item
            className="edit-profile-label"
            label="Phone Number"
            name="phone"
          >
            <Input
              className="edit-profile-input"
              name="phone"
              onChange={handleChange}
              placeholder={props.customer.phone}
            />
          </Form.Item>
          <Form.Item
            className="edit-profile-label"
            label="Profile Picture"
            name="photo_url"
          >
            <Input
              className="edit-profile-input"
              name="photo_url"
              onChange={handleChange}
              placeholder={props.customer.photo_url}
            />
          </Form.Item>
        </form>
      </Modal>
      <Modal
        title="About info"
        visible={props.aboutModalVisible}
        onOk={props.handleAboutModalClose}
        onCancel={props.handleAboutModalClose}
        footer={[
          <p
            style={{ display: 'inline', marginRight: '20%', color: '#ec3944' }}
          >
            {message}
          </p>,
          <Button key="back" onClick={props.handleAboutModalClose}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Update
          </Button>,
        ]}
      >
        <TextArea
          rows={4}
          name="description"
          defaultValue={props.customer.description}
          onChange={handleChange}
        />
      </Modal>
      <div
        className="profile-home-container"
        justify="space-around"
        align="middle"
      >
        <div className="profile-container">
          <div className="profile-image-container">
            <img
              className="profile-picture"
              src={props.customer.photo_url}
              alt={props.customer.name}
            />
            <h2 className="profile-name">
              {props.customer.name} {props.customer.lastname}
            </h2>
            <div className="profile-info">
              <p className="profile-info-p">
                {props.customer.city}, {props.customer.state},{' '}
                {props.customer.country}
              </p>
              <span
                className="profile-info-span"
                onClick={props.showContactModal}
              >
                Contact info
              </span>
              <div
                className="profile-edit-icon"
                onClick={props.showProfileModal}
              >
                <EditOutlined />
              </div>
            </div>
          </div>
          <div className="profile-about">
            <div className="profile-about-heading">
              <h2 className="profile-about-title">About</h2>
              <div
                className="profile-about-edit-icon"
                onClick={props.showAboutModal}
              >
                <EditOutlined />
              </div>
            </div>
            <p className="profile-about-p">{props.customer.description}</p>
          </div>
        </div>
        <div className="calendar-container">
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </div>
      </div>
    </>
  );
};
