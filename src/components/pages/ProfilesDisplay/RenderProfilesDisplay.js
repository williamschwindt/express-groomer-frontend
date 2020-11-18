import React, { useState } from 'react';
import {
  Row,
  Col,
  Avatar,
  Modal,
  Button,
  Breadcrumb,
  Form,
  Input,
  Layout,
  Menu,
} from 'antd';

import {
  UserOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export const RenderProfilesDisplay = props => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  // const [profileModalVisible, setProfileModalVisible] = useState(false);
  const handleContactModalClose = e => {
    setContactModalVisible(false);
  };

  let groomerInfo = props.location.state;

  return (
    // AFter clickingon link from SearchForm.js, it works, but typing in localhost:3000/groomers/1, it doesn't work
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={props.collapsed}
          onCollapse={props.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={props.viewHome}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
              onClick={props.viewGroomers}
            >
              Search Groomers
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />} onClick={props.viewPets}>
              Pets
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<FileOutlined />}
              onClick={() => props.authService.logout()}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Modal
          title="Contact info"
          visible={contactModalVisible}
          onOk={handleContactModalClose}
          onCancel={handleContactModalClose}
          footer={[
            <Button key="back" onClick={props.handleContactModalClose}>
              Close
            </Button>,
          ]}
        >
          <p>Phone number: {groomerInfo.phone}</p>
          <p>Email: {groomerInfo.email}</p>
        </Modal>
        {/* <Modal
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
      > */}
        <Modal>
          <Form.Item label="First Name" name="name">
            <Input placeholder={groomerInfo.name} />
          </Form.Item>
          <Form.Item label="Last Name" name="lastname">
            <Input placeholder={groomerInfo.lastname} />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input placeholder={groomerInfo.address} />
          </Form.Item>
          <Form.Item label="Zip Code" name="zip">
            <Input placeholder={groomerInfo.zip} />
          </Form.Item>
          <Form.Item label="City" name="city">
            <Input placeholder={groomerInfo.city} />
          </Form.Item>
          <Form.Item label="State" name="state">
            <Input placeholder={groomerInfo.state} />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input placeholder={groomerInfo.country} />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone">
            <Input placeholder={groomerInfo.phone} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder={groomerInfo.email} />
          </Form.Item>
          <Form.Item label="Profile Picture" name="photo_url">
            <Input placeholder={groomerInfo.photo_url} />
          </Form.Item>
        </Modal>
        {/* <Breadcrumb style={{ margin: '16px 0', marginBottom: '24px' }}>
        <Breadcrumb.Item
          onClick={props.showProfileModal}
          style={{ cursor: 'pointer' }}
        >
          Edit profile
        </Breadcrumb.Item>
      </Breadcrumb> */}
        <Row justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <DemoBox value={100}>
              <img
                src={groomerInfo.photo_url}
                alt={groomerInfo.name}
                style={{ borderRadius: '50%', marginBottom: '10px' }}
              />
              <h2>
                {groomerInfo.name} {groomerInfo.lastname}
              </h2>
              <p>
                {groomerInfo.city}, {groomerInfo.state}, {groomerInfo.country}
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
            <div className="customer-about-section">
              <h2>About</h2>
              <p>{groomerInfo.description}</p>
            </div>
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4} />
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <DemoBox value={50}>Calendar Here</DemoBox>
          </Col>
        </Row>
      </Layout>
    </>
  );
};
