import React, { Component } from "react";
import {
  Card,
  Table,
  Descriptions,
  Select,
  Cascader,
  Input,
  DatePicker,
  Button,
  Drawer
} from "antd";
const { RangePicker } = DatePicker;
const { Option } = Select;


export default class CollectContent extends Component {
  onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  };

  



  render() {
    const options = [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake"
              }
            ]
          }
        ]
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men"
              }
            ]
          }
        ]
      }
    ];
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: text => <a>{text}</a>
      },
      {
        title: "Age",
        dataIndex: "age"
      },
      {
        title: "Address",
        dataIndex: "address"
      }
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
      }
    ];
    return (<>
      <Card className="datacollect_filtercard">
        <Descriptions>
          <Descriptions.Item label="数据报送">
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Descriptions.Item>
          <Descriptions.Item label="采集人">
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Descriptions.Item>

          <Descriptions.Item label="地区">
            <Cascader options={options} placeholder="请选择" />
          </Descriptions.Item>
          <Descriptions.Item label="条件">
            <Input.Group compact>
              <Select defaultValue="Zhejiang">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
              <Input style={{ width: "200px" }} placeholder="请输入关键字" />
            </Input.Group>
          </Descriptions.Item>
          <Descriptions.Item label="条件">
            <Input.Group compact>
              <Select defaultValue="Zhejiang">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
              <RangePicker />
            </Input.Group>
          </Descriptions.Item>
          <Descriptions.Item>
            <Button style={{ marginLeft: 80, marginRight: 40 }}>搜索</Button>
            <a>重置搜索条件</a>
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card className="datacollect_list">
        <Table
          rowSelection={{
            type: "checkbox",
            onSelectChange: this.onSelectChange
          }}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </>
      
    );
  }
}
