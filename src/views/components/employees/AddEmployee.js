import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../../actions/employee";

// Modals add Admin
const AddEmployee = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
    const allDepartmentList = useSelector(state => state.department.allDepartment)
    console.log(allDepartmentList);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onSubmit = (data) => {
    dispatch(
      addEmployee(
        data.employeename,
        data.photo[0],
        data.jobtitle,
        data.cellphone,
        data.email,
        data._id
      )
    );
    console.log(data,'data')
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <PlusCircleOutlined /> Add New Employee
      </Button>
      <Modal
        title="Add New Admintrators"
        style={{ alignContent: "center" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
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
                    {...register("employeename", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Jobtitle *
                </div>
                <div>
                  <input
                    style={{
                      boxShadow: "none",
                      border: "1px solid #95a5a6",
                      width: "100%",
                    }}
                    type="text"
                    name="jobTitle"
                    {...register("jobtitle", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Email *
                </div>
                <div className="col-12">
                  <input
                    style={{
                      boxShadow: "none",
                      border: "1px solid #95a5a6",
                      width: "100%",
                    }}
                    type="text"
                    name="email"
                    {...register("email", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Department *
                </div>
                <div>
                  <select
                    {...register("_id", { required: true })}
                    style={{ boxShadow: "none !important", width: "30%" }}
                  >
                    {allDepartmentList.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.namedepartment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>Cellphone *</div>
                <div>
                  <PhoneInputWithCountry
                    placeholder="Enter phone number"
                    name="cellphone"
                    control={control}
                    rules={{ required: true }}
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Avatar *
                </div>
                <div>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    {...register("photo", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
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
                AddEmployee
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};


export default AddEmployee;
