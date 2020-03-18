import React, { Component } from "react";
import Nav from "../../components/portal/Nav";
import { Layout, Menu, Breadcrumb } from "antd";
import "./style.less";
import CollectSider from "./modules/collectsider";
import CollectContent from './modules/collectcontent'

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
          <Sider className="datacollect_sider" width={290} theme="light">
            <CollectSider></CollectSider>
          </Sider>
          <Content>
              <CollectContent></CollectContent>
          </Content>
        </Layout>
        {/* <Content style={{ padding: '0 50px',marginTop:60 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content> */}
      </Layout>
    );
  }
}
