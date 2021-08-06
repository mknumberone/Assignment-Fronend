/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { FileOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import {loadingEmployeeFail,loadingEmployeeTrue} from '../../../actions/department'

export default function ListEmInDepart(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const loadingEmployee = useSelector(
    (state) => state.department.loadingEmployee
  );
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/department/employee/${props.idDepart}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((resp) => {
        console.log("resp", resp);
        setData(resp.data);
        dispatch(loadingEmployeeFail());
      })
      .catch((err) => console.log(err));
  }, []);
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
  ];
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <FileOutlined />
        View Employee
      </Button>
      <Modal
        title=" Employee Infor"
        style={{ alignContent: "center" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
        width={1000}
      >
        <Table columns={columnsTable} dataSource={data} />
      </Modal>
    </div>
  );
}
