import React, { Component } from "react";
import { Menu } from "antd";
import { HomeOutlined,TeamOutlined,ApartmentOutlined,BlockOutlined} from '@ant-design/icons';
import { NavLink, withRouter } from "react-router-dom";
import  './style.less';

export default class menu extends Component {
  render() {
    return (
      <>
        <Menu mode="vertical"  className='devops_menu' style={{ height: "100%" }}>
          <Menu.Item key="1">
            <NavLink to="/devops/menu">
               <HomeOutlined />
              <span>目录管理</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/devops/org">
            <ApartmentOutlined />
              <span>组织管理</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/devops/layer">
            <BlockOutlined />
              <span>图层授权</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/devops/user">
            <TeamOutlined />
              <span>用户管理</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
