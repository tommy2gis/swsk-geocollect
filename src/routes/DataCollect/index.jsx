import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout, Menu, Breadcrumb } from "antd";
import "./style.less";
import CollectSider from "./modules/collectsider";
import CollectContent from './modules/collectcontent';
import EditContent from "./modules/editcontent";

const { Content, Sider } = Layout;

export default class index extends Component {
  componentDidMount() {
    const ele = document.getElementById("loading");
    ele.style.display = "none";
  }
  state = { edit: false };
  render() {
    return (
      <Layout className="layout">
        <Nav></Nav>
        <Layout style={{ marginTop: 60 }}>
          {this.state.edit?<EditContent></EditContent>:<>
            <Sider className="datacollect_sider" width={290} theme="light">
            <CollectSider></CollectSider>
          </Sider>
          <Content>
              <CollectContent></CollectContent>
          </Content>
          </>}
        </Layout>

      </Layout>
    );
  }
}
