import React, { Component } from "react";
import {
  Card,
  PageHeader,
  Form,
  Select,
  Cascader,
  Input,
  Row,
  Col,
  Upload,
  DatePicker,
  Button
} from "antd";

import { UploadOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const residences = [
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

export default class EditContent extends Component {
  formRef = React.createRef();

  render() {
    const uploadprops = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange({ file, fileList }) {
        if (file.status !== "uploading") {
          console.log(file, fileList);
        }
      },
      defaultFileList: [
        {
          uid: "1",
          name: "xxx.png",
          status: "done",
        },
        {
          uid: "2",
          name: "yyy.png",
          status: "done",
        },
        {
          uid: "3",
          name: "zzz.png",
          status: "error",
        }
      ]
    };
    return (
      <>
        <Card className="datacollect_edit">
          <PageHeader
            style={{ padding: 0 }}
            className="site-page-header"
            onBack={() => null}
            title="返回"
          />
          <Form
            {...formItemLayout}
            ref={this.formRef}
            name="register"
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86"
            }}
            scrollToFirstError
          >
            <Row gutter={[8, 8]}>
              <Col span={12}>
                {" "}
                <Form.Item
                  name="loc"
                  label="位置"
                  rules={[
                    {
                      required: true,
                      message: "请选取位置!"
                    }
                  ]}
                >
                  <Button>坐标拾取</Button>
                </Form.Item>
                <Form.Item
                  name="id"
                  label="序号"
                  rules={[
                    {
                      required: true,
                      message: "请输入名称!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="名称"
                  rules={[
                    {
                      required: true,
                      message: "请输入名称!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="simplename"
                  label="简称"
                  rules={[
                    {
                      required: true,
                      message: "请输入简称!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="residence"
                  label="地区"
                  rules={[
                    {
                      type: "array",
                      required: true,
                      message: "Please select your habitual residence!"
                    }
                  ]}
                >
                  <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="地址"
                  rules={[
                    {
                      required: true,
                      message: "请输入地址!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="邮编"
                  rules={[
                    {
                      required: true,
                      message: "请输入邮编!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="tel"
                  label="电话"
                  rules={[
                    {
                      required: true,
                      message: "请输入电话!"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="tel"
                  label="附件列表"
                  rules={[
                    {
                      required: true,
                      message: "请输入电话!"
                    }
                  ]}
                >
                  <Upload {...uploadprops}>
                    <Button>
                      <UploadOutlined /> 上传
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </>
    );
  }
}
