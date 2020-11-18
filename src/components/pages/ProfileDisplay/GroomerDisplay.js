import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { RenderCustomerDashboard } from '../CustomerDashboard/RenderCustomerDashboard';

const { Header, Content, Footer, Sider } = Layout;

const GroomerDisplay = props => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  let groomerInfo = props.location.state;

  // const routeHome = () => {
  //     let path =
  // }

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
            // onClick={}
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
      <div className="profile-photo">
        <img src={groomerInfo.photo_url} />
      </div>
      <div className="profile-description">
        <h3>
          {groomerInfo.name} {groomerInfo.lastname}
        </h3>
        <h4>About Me:</h4>
        <p>{groomerInfo.description}</p>
        <ul>
          <h4>Contact: </h4>
          <li>{groomerInfo.phone}</li>
          <li>{groomerInfo.email}</li>
          <li>
            {groomerInfo.address}, {groomerInfo.zip}
          </li>
        </ul>
      </div>

      <div>{console.log(groomerInfo)}</div>
    </Layout>

    // <Layout style={{ minHeight: '100vh' }}>

    // <div className="profile-page">
    //    <Sider
    //     collapsible
    //     collapsed={props.collapsed}
    //     onCollapse={props.onCollapse}
    //   >
    //     <div className="logo" />
    //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    //       <Menu.Item
    //         key="1"
    //         icon={<PieChartOutlined />}
    //         onClick={props.viewHome}
    //       >
    //         Home
    //       </Menu.Item>
    //       <Menu.Item
    //         key="2"
    //         icon={<UserOutlined />}
    //         onClick={props.viewGroomers}
    //       >
    //         Search Groomers
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<TeamOutlined />} onClick={props.viewPets}>
    //         Pets
    //       </Menu.Item>
    //       <Menu.Item
    //         key="4"
    //         icon={<FileOutlined />}
    //         onClick={() => props.authService.logout()}
    //       >
    //         Logout
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //     {/* <Link to="/customer-dashboard">Home</Link> */}
    //     {/* <div className="profile-photo">
    //         <img src={groomerInfo.photo_url} />
    //     </div>
    //     <div className="profile-description">
    //         <h3>
    //         {groomerInfo.name} {groomerInfo.lastname}
    //         </h3>
    //         <h4>About Me:</h4>
    //         <p>{groomerInfo.description}</p>
    //         <ul>
    //         <h4>Contact: </h4>
    //         <li>{groomerInfo.phone}</li>
    //         <li>{groomerInfo.email}</li>
    //         <li>
    //             {groomerInfo.address}, {groomerInfo.zip}
    //         </li>
    //         </ul>
    //     </div>
    //     </div> */}
    //  </Layout>
  );
};

export default GroomerDisplay;
