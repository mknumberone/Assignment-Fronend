import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { addDepartment } from "../../../actions/department";

// Modals add Admin
const AddDepartment = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      addDepartment(data.namedepartment, data.officephone, data.manager)
    );
    console.log(data, "data");
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <PlusCircleOutlined /> Add New Department
      </Button>
      <Modal
        title="Add New DepartMent"
        style={{ alignContent: "center" }}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Name Department *
            </div>
            <div>
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="namedepartment"
                {...register("namedepartment", { required: true })}
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
              Manager *
            </div>
            <div>
              <input
                style={{
                  boxShadow: "none",
                  border: "1px solid #95a5a6",
                  width: "100%",
                }}
                type="text"
                name="manager"
                {...register("manager", { required: true })}
              />
            </div>
          </div>

          <div>
            <div>Offce Phone *</div>
            <div>
              <PhoneInputWithCountry
                placeholder="Enter phone number"
                name="officephone"
                control={control}
                rules={{ required: true }}
              />
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
                Add Department
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddDepartment;
