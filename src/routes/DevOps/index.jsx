import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout} from "antd";
import LeftMenu from './modules/menu'
import "./style.less";

const { Content, Sider } = Layout;

export default class index extends Component {
  componentDidMount() {
    const ele = document.getElementById("loading");
    ele.style.display = "none";
  }

  render() {
    return (
      <Layout className="layout">
        <Nav></Nav>
        <Layout style={{ marginTop: 60 }}>
          <Sider className="site-layout-background" width={200}>
           <LeftMenu></LeftMenu>
          </Sider>
          <Content>运维首页</Content>
        </Layout>
      </Layout>
    );
  }
}
