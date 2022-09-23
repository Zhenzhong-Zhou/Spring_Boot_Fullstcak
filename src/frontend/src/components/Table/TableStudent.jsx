import {useEffect, useState} from "react";
import {Alert, Button, Empty, Spin, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";

import {getAllStudents} from "../../client";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
];

const TableStudent = () => {
    const [students, setStudents] = useState([]);
    const [fetching, setFetching] = useState(true);
    const fetchStudents = () => {
        getAllStudents().then(res => res.json()).then(data => {
            setStudents(data);
            setFetching(false);
        });
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    if (fetching) {
        return (
            <Spin tip="Loading...">
                <Alert message="Alert message title"
                       description="Further details about the context of this alert."
                       type="info"/>
            </Spin>
        );
    }

    if (students.length <= 0) {
        return <Empty/>;
    }

    return (
        <Table rowKey={student => student.id} dataSource={students} columns={columns} bordered
               title={() =>
                   <Button type="primary" shape="round" icon={<PlusOutlined/>} size="small">
                       Add New Student
                   </Button>
               } pagination={{pageSize: 50}} scroll={{y: 500}}/>
    );
}

export default TableStudent;
