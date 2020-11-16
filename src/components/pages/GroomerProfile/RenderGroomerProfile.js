import React from 'react';
import { Row, Col, Modal, Button, Breadcrumb, Form, Input } from 'antd';
import MyMap from '../../../components/MyMap/MyMap';
import './style.css';

const DemoBox = props => (
  <div className={`height-${props.value}`}>{props.children}</div>
);

export const RenderGroomerProfile = props => {
  if (props.isFetching === true) {
    return <div>Loading</div>;
  }

  if (props.error !== '') {
    return <div>There was a problem loading this page</div>;
  }

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
        <p>Phone number: {props.groomer.phone}</p>
        <p>Email: {props.groomer.email}</p>
      </Modal>
      <Modal
        title="Edit profile"
        visible={props.profileModalVisible}
        onOk={props.handleProfileModalClose}
        onCancel={props.handleProfileModalClose}
        footer={[
          <Button key="back" onClick={props.handleProfileModalClose}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={props.handleProfileModalClose}
          >
            Update
          </Button>,
        ]}
      >
        <Form.Item label="First Name" name="name">
          <Input placeholder={props.groomer.name} />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname">
          <Input placeholder={props.groomer.lastname} />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input placeholder={props.groomer.address} />
        </Form.Item>
        <Form.Item label="Zip Code" name="zip">
          <Input placeholder={props.groomer.zip} />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input placeholder={props.groomer.city} />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Input placeholder={props.groomer.state} />
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input placeholder={props.groomer.country} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone">
          <Input placeholder={props.groomer.phone} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder={props.groomer.email} />
        </Form.Item>
        <Form.Item label="Profile Picture" name="photo_url">
          <Input placeholder={props.groomer.photo_url} />
        </Form.Item>
      </Modal>
      <Breadcrumb style={{ margin: '16px 0', marginBottom: '24px' }}>
        <Breadcrumb.Item
          onClick={props.showProfileModal}
          style={{ cursor: 'pointer' }}
        >
          Edit profile
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row id="about" justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <DemoBox value={100}>
            <img
              src={props.groomer.photo_url}
              alt={props.groomer.name}
              style={{ borderRadius: '50%', marginBottom: '10px' }}
            />
            <h2>
              {props.groomer.name} {props.groomer.lastname}
            </h2>
            <p>
              {props.groomer.city}, {props.groomer.state},{' '}
              {props.groomer.country}
              <span
                onClick={props.showContactModal}
                style={{
                  color: '#ec3944',
                  marginLeft: '20px',
                  cursor: 'pointer',
                }}
              >
                Contact info
              </span>
            </p>
          </DemoBox>
          <div className="groomer-about-section">
            <h2>About</h2>
            <p>{props.groomer.description}</p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div id="calendar">
            <DemoBox value={50}>Calendar Here</DemoBox>
          </div>
        </Col>
      </Row>

      <Row id="map" justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <div id="map">
            <h2>Location</h2>
            <MyMap
              // style={{

              // }}
              zoom={10}
              initialCenter={{
                lat: -1.2884,
                lng: 36.8233,
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
