import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../../actions/employee";

// Modals add Admin
const UpdateEmployee = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const allDepartmentList = useSelector(
    (state) => state.department.allDepartment
  );
  const employee = useSelector((state) => state.employee.employeeList); // get ra employee theo id em tryền sang
  const oldData = employee?.find((e) => e._id === props.idEmployee);
  const [number, setNumber] = useState(oldData.cellphone);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const onSubmitData = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployee(
        props.idEmployee,
        data.employeename,
        data.photo,
        data.jobtitle,
        number,
        data.email,
        data.department
      )
    );
    console.log(
      props.idEmployee,
      data.employeename,
      data.photo,
      data.jobtitle,
      number,
      data.email,
      data.department,
      "dataTest"
    );
  };

  const updateHandlerChanged = (e) => {
    console.log("e.target.value", e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updateFileChanged = (e) => {
    setData({
      ...data,
      photo: e.target.files[0],
    });
  };

  useEffect(() => {
    if (props.idEmployee) {
      const dataFake = employee.find((x) => x._id === props.idEmployee);
      const dataNew = {
        employeename: dataFake.employeename,
        photo: dataFake.photo,
        jobtitle: dataFake.jobtitle,
        email: dataFake.email,
        department: dataFake.department,
      };
      setData({ ...dataNew });
    }
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <EditOutlined /> Edit
      </Button>
      <Modal
        title="Update Employee Infor"
        style={{ alignContent: "center" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <form onSubmit={onSubmitData}>


          <div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Name *
            </div>
            <div>
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="employeename"
                className="form-control"
                value={data.employeename}
                onChange={updateHandlerChanged}
              />
            </div>
          </div>

          <div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              JobTitle *
            </div>
            <div>
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="jobtitle"
                className="form-control"
                value={data.jobtitle}
                onChange={updateHandlerChanged}
              />
            </div>
          </div>

          <div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Email *
            </div>
            <div>
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="email"
                value={data.email}
                onChange={updateHandlerChanged}
              />
            </div>
          </div>

          <div >
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Department *
            </div>
            <div className="col-12">
              <select
                name="department"
                className="w-100 form-control focus-remove-shadow"
                style={{ boxShadow: "none !important" }}
                value={data.department}
                onChange={updateHandlerChanged}
              >
                {allDepartmentList.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.namedepartment}
                  </option>
                ))}
              </select>
            </div>
          </div>



          <div>
            <div
              style={{ color: "rgb(109, 109, 109)", fontWeight: "bold" }}
            >
              CellPhone *
            </div>
            <div className="col-12">
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>

          <div >
            <div

              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Avatar *
            </div>
            <div className="col-12">
              <input
                type="file"
                name="updateFileChanged"
                value={data.updateFileChanged}
                onChange={updateFileChanged}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              className="col-6 "
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
            <div
              className="col-6 "
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  margin: "1rem 0 0 12rem",
                  backgroundColor: "#3498db",
                  border: "none",
                  color: "white",
                  width: "100px",
                  height: "45px",
                  borderRadius: "4px",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateEmployee;
