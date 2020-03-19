import React, { Component } from "react";
import { Input } from "antd";
import { Tree } from "antd";

const { Search } = Input;

export default class auditSider extends Component {
  render() {
    const treeData = [
      {
        title: "parent 0",
        key: "0-0",
        children: [
          {
            title: "leaf 0-0",
            key: "0-0-0",
            isLeaf: true
          },
          {
            title: "leaf 0-1",
            key: "0-0-1",
            isLeaf: true
          }
        ]
      },
      {
        title: "parent 1",
        key: "0-1",
        children: [
          {
            title: "leaf 1-0",
            key: "0-1-0",
            isLeaf: true
          },
          {
            title: "leaf 1-1",
            key: "0-1-1",
            isLeaf: true
          }
        ]
      }
    ];
    return (
      <>
        <Search
          size="large"
          placeholder="请输入关键字"
          onSearch={value => console.log(value)}
          style={{ width: 250 }}
        />
        <Tree multiple defaultExpandAll treeData={treeData} />
      </>
    );
  }
}
