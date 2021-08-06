import React, { useEffect } from "react";
import { Table, Button, Space, } from "antd";
import { connect } from "react-redux";
import { delAdminID, fetchAdmins, getAdminID} from "../../../actions/admin";
import {
    DeleteOutlined, EditOutlined
} from "@ant-design/icons";
import AddAdmin from "./AddAdmin";
import { useParams } from "react-router-dom";
import ChangePass from './ChangePass'

// View List  admin
const ListAdmin = (props) => {
    //component didmount
    useEffect(() => {
        props.fetchAdmins();
        props.delAdminID()
    }, []);
    const onDelete = (id) =>{
         if (window.confirm("Bạn có muốn xóa nhân viên này không ?")) {
           props.delAdminID(id);
         }
    }
    const columnsTable = [
        {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "User name",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "email",
            dataIndex: "email",
            key: "emali",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (roles) => <div>{roles === 1 ? "Admin" : "User"}</div>,
        },
        {
            title: "Action",
            key: "action",
            render: (item) => (
                <Space size="middle">
                    <Button type="default" loading={props.delAdminID.loading}  onClick={() => onDelete(item._id)} danger>
                        <DeleteOutlined />
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <AddAdmin />
            <Table
                loading={props.lists.loading}
                columns={columnsTable}
                dataSource={props.lists.admin}
            />
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        lists: state.admin.list,
        getAdminState: state.getAdminID,
        delAdminState:state.delAdminID,
    };
};

export default connect(mapStateToProps, { fetchAdmins, getAdminID, delAdminID})(ListAdmin);
