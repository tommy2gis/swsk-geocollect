import React, { Component } from 'react'
import { Card,Table } from 'antd';

export default class auditContent extends Component {

    onSelectChange=(selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
            },
          ];
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
            {
              key: '4',
              name: 'Disabled User',
              age: 99,
              address: 'Sidney No. 1 Lake Park',
            },
          ];
        return (
            <>
                 <Card className='dataaudit_filtercard'>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card className='dataaudit_list'>
                <Table
                    rowSelection={{
                    type: 'checkbox',
                    onSelectChange:this.onSelectChange,
                    }}
                    columns={columns}
                    dataSource={data}
                />
                </Card>
            </>
        )
    }
}
