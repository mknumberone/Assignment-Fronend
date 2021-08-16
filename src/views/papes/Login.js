import React from "react";
import { Form, Input, Button, Card } from "antd";

import {login} from '../../actions/auth'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const Login = (props) => {
    const onFinish = (values) => {
        props.login(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const {isLoggedIn} = props
    return (
        isLoggedIn ? (
        <Redirect to="/"/>
        ):(
            <Card
                size="small"
                title="Login"
                style={{ width: 500, textAlign: "center", margin: "20px auto" }}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 15,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 3) {
                                        return Promise.reject("Name length must bigger than 3!")
                                    }
                                    if (value && value.length > 24) {
                                        return Promise.reject("Name length must smaller than 24!")
                                    }
                                    return Promise.resolve()
                                }
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 6) {
                                        return Promise.reject("PassWord length must bigger than 6!")
                                    }
                                    return Promise.resolve()
                                }
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <p>{props.message}</p>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={props.loading}
                            style={{ float: "left", width: "50%" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )  
    );
};

//nếu vấn đề nào em

function mapStateToProps({auth}){
    return{
        isLoggedIn:auth.isLoggedIn,
        message: auth.message,
        loading:auth.loading,
    }
}


export default connect(mapStateToProps,{login})(Login);
