import React, { Component } from 'react';
import Nav from '../../components/portal/Nav';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;

export default class index extends Component {
    componentDidMount(){
        const ele = document.getElementById("loading");
        ele.style.display = "none";
    }

    render() {
        return (
                <Layout className="layout">
                    <Nav></Nav>
                    <Content style={{ padding: '0 50px',marginTop:60 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content>
                </Layout>
                
        )
    }
}
