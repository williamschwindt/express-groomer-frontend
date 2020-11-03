import React from 'react';
import { Row, Col, Avatar, Modal, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

export const RenderGroomerProfile = props => {
  return (
    <>
      <Modal
        title="Contact info"
        visible={props.modalVisible}
        onOk={props.handleClose}
        onCancel={props.handleClose}
        footer={[
          <Button key="back" onClick={props.handleClose}>
            Close
          </Button>,
        ]}
      >
        <p>Phone number: (111)-111-1111</p>
        <p>Email: llama001@maildrop.cc</p>
      </Modal>
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
                onClick={props.showModal}
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
