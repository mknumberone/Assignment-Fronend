import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateDepartment } from "../../../actions/department";

// Modals add Admin
const UpdateDepartment = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const department = useSelector((state) => state.department.allDepartment);
    const oldData = department?.find((e) => e._id === props.idEdit);
    const [namedepartment, setDepartment] = useState(oldData.namedepartment);
    const [officephone, setOfficephone] = useState(oldData.officephone);
    const [manager, setManager] = useState(oldData.manager);
    const dispatch = useDispatch();
    const onSubmitData = (e) => {
        e.preventDefault();
        dispatch(
          updateDepartment(props.idEdit, namedepartment, officephone, manager)
        );
    };
    useEffect(() => {
        if (props.idEdit) {
          const dataFake = department.find((x) => x._id === props.idEdit);
          const dataNew = {
            namedepartment: dataFake.namedepartment,
            officephone: dataFake.officephone,
            manager: dataFake.manager,
          };
          setDepartment(dataNew.namedepartment);
          setOfficephone(dataNew.officephone);
        }
    },[]);

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
                title="Update Department Infor"
                style={{ alignContent: "center" }}
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleCancel}
            >
                <form onSubmit={onSubmitData}>
                    <div>
                        <div>
                            <div>
                                <div
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    Name Department*
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
                                        className="form-control"
                                        value={namedepartment}
                                        onChange={(e) => setDepartment(e.target.value)}
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
                                    Office Phone *
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
                                        value={officephone}
                                        onChange={(e) => setOfficephone(e.target.value)}
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
                                        className="form-control"
                                        value={manager}
                                        onChange={(e) => setManager(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
                </form>
            </Modal>
        </>
    );
};

export default UpdateDepartment;
