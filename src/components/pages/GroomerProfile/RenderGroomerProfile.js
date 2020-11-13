import React from 'react';
import { Row, Col, Modal, Button, Breadcrumb, Form, Input } from 'antd';

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export const RenderGroomerProfile = props => {
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
      <Row justify="space-around" align="middle">
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
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
        <Col xs={20} sm={16} md={12} lg={8} xl={4} />
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <DemoBox value={50}>Calendar Here</DemoBox>
        </Col>
      </Row>
    </>
  );
};
