import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, Input } from "antd";
import { connect } from "react-redux";
import { addAdmin } from "../../../actions/admin";
import {  EditOutlined } from "@ant-design/icons";


// Modals add Admin
const ChangePass = () => {
 
    const submit = () => {
      alert("Success")
    }

    return (
        <>
                <Form>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={5}> Old Password</Col>
                                <Col span={14}><Input/></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: "1rem 0" }}>
                        <Col span={24}>
                            <Row>
                                <Col span={5}>New password</Col>
                                <Col span={14}><Input  /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ margin: "0rem 0 1rem 0" }}>
                        <Col span={24}>
                            <Row>
                                <Col span={5}>Comfirm NewPass</Col>
                                <Col span={14}>
                                    <Input >
                                     
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Button  onClick={submit} type="primary" style={{ margin: "1rem 0 0 200px" }} >Comfirm </Button>
                </Form>
         
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        addAdminState: state.admin.addAdmin,
    };
};

export default connect(mapStateToProps, { addAdmin })(ChangePass);
