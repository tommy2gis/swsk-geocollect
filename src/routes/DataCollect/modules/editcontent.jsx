import React, { Component } from 'react'
import { Card,PageHeader , Descriptions, Select,Cascader,Input,DatePicker,Button  } from "antd";

export default class EditContent extends Component {
    render() {
        return (
            <>
            <Card className="datacollect_edit">
            <PageHeader
                className="datacollect_edit-header"
                onBack={() => null}
                title="返回"
            />
            
            </Card>
            </>
        )
    }
}
