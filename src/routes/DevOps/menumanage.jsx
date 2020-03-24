import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout} from "antd";
import LeftMenu from './modules/menu';
import MenuContent from './modules/menucontent';
import "./style.less";

const { Content, Sider } = Layout;

export default class MenuManage extends Component {
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
          <Content><MenuContent></MenuContent></Content>
        </Layout>
      </Layout>
    );
  }
}
