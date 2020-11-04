import React from 'react';
import { Row, Col, Avatar, Modal, Button, Breadcrumb, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
        <p>Phone number: (111)-111-1111</p>
        <p>Email: llama001@maildrop.cc</p>
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
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="Zip Code" name="zip">
          <Input />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Input />
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Profile Picture" name="photo_url">
          <Input />
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
            <Avatar
              size={128}
              icon={<UserOutlined />}
              style={{ marginBottom: '10px' }}
            />
            <h2>William Schwindt</h2>
            <p>
              Bend, Oregon, United States{' '}
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
