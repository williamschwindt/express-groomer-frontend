import React, { useEffect, useState } from 'react';
import { Row, Col, Modal, Button, Breadcrumb, Form, Input } from 'antd';

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

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

  useEffect(() => {
    if (props.status === 'success') {
      props.handleProfileModalClose();
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
        <form>
          <Form.Item label="First Name" name="name">
            <Input
              name="name"
              onChange={handleChange}
              placeholder={props.customer.name}
            />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname">
            <Input
              name="lastname"
              onChange={handleChange}
              placeholder={props.customer.lastname}
            />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input
              name="address"
              onChange={handleChange}
              placeholder={props.customer.address}
            />
          </Form.Item>
          <Form.Item label="Zip Code" name="zip">
            <Input
              name="zip"
              onChange={handleChange}
              placeholder={props.customer.zip}
            />
          </Form.Item>
          <Form.Item label="City" name="city">
            <Input
              name="city"
              onChange={handleChange}
              placeholder={props.customer.city}
            />
          </Form.Item>
          <Form.Item label="State" name="state">
            <Input
              name="state"
              onChange={handleChange}
              placeholder={props.customer.state}
            />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input
              name="country"
              onChange={handleChange}
              placeholder={props.customer.country}
            />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone">
            <Input
              name="phone"
              onChange={handleChange}
              placeholder={props.customer.phone}
            />
          </Form.Item>
          <Form.Item label="Profile Picture" name="photo_url">
            <Input
              name="photo_url"
              onChange={handleChange}
              placeholder={props.customer.photo_url}
            />
          </Form.Item>
        </form>
      </Modal>
      <Breadcrumb style={{ margin: '16px 0', marginBottom: '24px' }}>
        <Breadcrumb.Item
          onClick={props.showProfileModal}
          style={{ cursor: 'pointer' }}
        >
          Edit profile
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="space-around" align="middle">
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
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
            </div>
          </div>
          <div className="profile-about">
            <h2 className="profile-about-title">About</h2>
            <p className="profile-about-p">{props.customer.description}</p>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4} />
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <DemoBox value={50}>Calendar Here</DemoBox>
          <DemoBox value={50}>Map Here</DemoBox>
        </Col>
      </Row>
    </>
  );
};
