/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { Table, Button, Space ,Input} from "antd";
import { connect, useDispatch } from "react-redux";
import { getEmployee, deleteEmployee } from "../../../actions/employee";
import { DeleteOutlined } from "@ant-design/icons";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee"

const { Search } = Input;
// View List Employee
const ListEmployee = (props) => {
  //component didmount
  useEffect(() => {
    props.getEmployee();
  }, []);
    const dispatch =useDispatch()
    const onDelete = (id) => { 
     console.log("id",id);
     if (window.confirm("Bạn có muốn xóa nhân viên này không ?")) {
       dispatch(deleteEmployee(id));
     }
   };
  const columnsTable = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "employeename",
      key: "employeename",
    },
    {
      title: "Avata",
      dataIndex: "photo",
      render: (items) => {
        return (
          <img
            width="50"
            height="50"
            src={`http://localhost:5000/employee/${items}`}
          />
        );
      },
    },
    {
      title: "Jobtitle",
      dataIndex: "jobtitle",
      key: "jobtitle",
    },
    {
      title: "Cellphone",
      dataIndex: "cellphone",
      key: "cellphone",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <UpdateEmployee idEmployee={item?._id} />
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
      <AddEmployee />
      <Search
      style={{margin:"0rem 0 1rem 1rem",width:"60%"}}
        placeholder="input search loading with enterButton"
        enterButton
      />
      <Table
        loading={props.lists.loading}
        columns={columnsTable}
        dataSource={props.lists.employeeList}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.employee
  };
};

export default connect(mapStateToProps, { getEmployee })(ListEmployee);
