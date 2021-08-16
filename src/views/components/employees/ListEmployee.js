/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Table, Button, Space ,Input} from "antd";
import { connect, useDispatch } from "react-redux";
import { getEmployee, deleteEmployee } from "../../../actions/employee";
import { DeleteOutlined } from "@ant-design/icons";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee"

// View List Employee
const ListEmployee = (props) => {
  //component didmount
  const employee = props.lists.employeeList;
 const [dataSource, setDataSource] = useState(employee);
 console.log(dataSource,"dataSource");
 const [value, setValue] = useState("");
  useEffect(() => {
    props.getEmployee();
  }, []);
    const dispatch =useDispatch()
    const onDelete = (id) => { 
     if (window.confirm("Bạn có muốn xóa nhân viên này không ?")) {
       dispatch(deleteEmployee(id));
     }
   };
  
  //Search 
  const FilterByNameInput = (
    <Input
      placeholder="Search Name"
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = employee.filter((entry) =>
          entry.employeename.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );
 
  const columnsTable = [
    {
      title: FilterByNameInput,
      dataIndex: "name",
      key: "1",
    },
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
      {/* <Search
        style={{ margin: "0rem 0 1rem 1rem", width: "60%" }}
        placeholder="input search loading with enterButton"
        enterButton
      /> */}
      <Table
        loading={props.lists.loading}
        columns={columnsTable}
        dataSource={dataSource}
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
