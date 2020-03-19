import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout, Menu, Breadcrumb } from "antd";
import "./style.less";
import AuditSider from "./modules/auditsider";
import AuditContent from './modules/auditcontent'

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
          <Sider className="dataaudit_sider" width={290} theme="light">
            <AuditSider></AuditSider>
          </Sider>
          <Content>
              <AuditContent></AuditContent>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
