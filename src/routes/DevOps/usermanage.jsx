import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout} from "antd";
import LeftMenu from './modules/menu';
import UserContent from './modules/usercontent'
import "./style.less";

const { Content, Sider } = Layout;

export default class UserManage extends Component {
  componentDidMount() {
    const ele = document.getElementById("loading");
    ele.style.display = "none";
  }

  render() {
    return (
      <Layout className="layout">
        <Nav></Nav>
        <Layout style={{ marginTop: 60 }}>
          <Sider className="site-layout-background" width={120}>
           <LeftMenu></LeftMenu>
          </Sider>
          <Content><UserContent></UserContent></Content>
        </Layout>
      </Layout>
    );
  }
}
