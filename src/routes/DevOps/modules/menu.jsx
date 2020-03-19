import React, { Component } from "react";
import { Menu } from "antd";
import { NavLink, withRouter } from "react-router-dom";

export default class menu extends Component {
  render() {
    return (
      <>
        <Menu mode="vertical" style={{ height: "100%" }}>
          <Menu.Item key="1">
            <NavLink to="/devops/menu">
              <span>目录管理</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/devops/org">
              <span>组织管理</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/devops/layer">
              <span>图层授权</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/devops/user">
              <span>用户管理</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
