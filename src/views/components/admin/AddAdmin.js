import React, { useState,useEffect } from "react";
import { Button,  Modal, Form, Row, Col, Input, Select } from "antd";
import { connect } from "react-redux";
import { addAdmin } from "../../../actions/admin";
import { PlusCircleOutlined} from "@ant-design/icons";
import { useFormInput } from "../../../utils/customHooks";
const { Option } = Select;

// Modals add Admin
const AddAdmin = ({ addAdmin, addAdminState}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] = useFormInput("")
    const [email, setEmail] = useFormInput("")
    const [role, setRole] = useState(1)
    // const [states,setStates] = useState(true)

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const submit = () => {
        addAdmin({
            username,
            email,
            role,
        })
        handleCancel()
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                <PlusCircleOutlined/> Add New Admin
            </Button>
            <Modal
                title="Add New Admintrators"
                style={{ alignContent: "center" }}
                visible={isModalVisible}
                onCancel={handleCancel}
                onOk={handleCancel}
            >
                <Form>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={5}> User Name</Col>
                                <Col span={14}><Input onChange={setUsername} /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: "1rem 0" }}>
                        <Col span={24}>
                            <Row>
                                <Col span={5}>Email</Col>
                                <Col span={14}><Input onChange={setEmail} /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: "0rem 0 1rem 0" }}>
                        <Col span={24}>
                            <Row>
                                <Col span={5}>Role</Col>
                                <Col span={14}>
                                    <Input.Group onChange={setRole} compact>
                                        <Select defaultValue={role}>
                                            <Option  value={1}>Admin</Option>
                                            <Option value={0}>User</Option>
                                        </Select>
                                    </Input.Group>
                                </Col>
                            </Row>
                        </Col>
                        <p>{addAdminState.message}</p>
                    </Row>
                    <Button loading={addAdminState.loading} onClick={submit}  type="primary"  style={{ margin: "1rem 0 0 200px" }} >ADD </Button>
                </Form>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        addAdminState:state.admin.addAdmin,
    };
};

export default connect(mapStateToProps, { addAdmin })(AddAdmin);
