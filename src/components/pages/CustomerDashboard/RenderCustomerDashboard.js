import React from 'react';
import { CustomerProfile } from '../CustomerProfile';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import SearchForm from '../search/SearchForm';
const { Header, Content, Footer, Sider } = Layout;

export const RenderCustomerDashboard = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={props.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
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
      {props.home && (
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content>
            <div
              className="site-layout-background"
              style={{ padding: 20, minHeight: 360 }}
            >
              <CustomerProfile />
            </div>
          </Content>
        </Layout>
      )}
      {props.profile && (
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Profile info displayed here
            </div>
          </Content>
        </Layout>
      )}
      {props.groomers && (
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <SearchForm />
            </div>
          </Content>
        </Layout>
      )}
      {props.pets && (
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Users pets displayed here
            </div>
          </Content>
        </Layout>
      )}
    </Layout>
  );
};
