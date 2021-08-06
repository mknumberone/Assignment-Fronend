import React, { useEffect } from "react";
import { Table, Button, Space, } from "antd";
import { connect, useDispatch } from "react-redux";
import {
  getAllDepartment,
  deleteDepartment,
} from "../../../actions/department";
import {
    DeleteOutlined, EditOutlined
} from "@ant-design/icons";
import AddDepartment from "./AddDepartment";
import UpdateDepartment from "./UpdateDepartment";
import ListEmInDepart from "./ListEmInDepart";


// View List  admin
const ListDepartMent = (props) => {
    //component didmount
    useEffect(() => {
        props.getAllDepartment();
    }, []);
    const dispatch = useDispatch();
    const onDelete = (id) => {
     console.log("id", id);
     if (window.confirm("Bạn có muốn xóa nhân viên này không ?")) {
       dispatch(deleteDepartment(id));
     }

    }
    const columnsTable = [
      {
        title: "ID",
        dataIndex: "_id",
        key: "_id",
      },
      {
        title: "Department name",
        dataIndex: "namedepartment",
        key: "namedepartment",
      },
      {
        title: "Offce phone",
        dataIndex: "officephone",
        key: "officephone",
      },
      {
        title: "Role",
        dataIndex: "manager",
        key: "manager",
      },
      {
        title: "View Employee",
        key: "View Employee",
        render: (item) => <ListEmInDepart idDepart={item._id}/>,
      },
      {
        title: "Action",
        key: "action",
        render: (item) => (
          <Space size="middle">
            <UpdateDepartment idEdit={item?._id} />
            <Button type="default" onClick={() => onDelete(item._id)} danger>
              <DeleteOutlined />
              Delete
            </Button>
          </Space>
        ),
      },
    ];

    return (
      <>
        <AddDepartment></AddDepartment>
        <Table
          loading={props.lists.loading}
          columns={columnsTable}
          dataSource={props.lists.allDepartment}
        />
      </>
    );
};


const mapStateToProps = (state) => {
    return {
      lists: state.department,
    };
};


export default connect(mapStateToProps, { getAllDepartment })(ListDepartMent);
