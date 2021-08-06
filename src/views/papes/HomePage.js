import React from "react";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

class HomePage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse} >
                    <div className="logo" />
                    <Menu
                    style={{margin:"2.55rem 0 0 0"}}
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        <SubMenu key="sub0" icon={<DesktopOutlined />} title="Department">
                            <Menu.Item key="6">Division 1</Menu.Item>
                            <Menu.Item key="7">Division 2</Menu.Item>
                            <Menu.Item key="8">Division 3</Menu.Item>
                            <Menu.Item key="9">Back-office</Menu.Item>
                            <Menu.Item key="10">IT-Support</Menu.Item>
                        </SubMenu>
                        <Menu.Item icon={<UserOutlined />}>
                        Administrator
                        </Menu.Item>
                        <Menu.Item icon={<TeamOutlined />}>
                        Employee
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                </Layout>
            </Layout>
        );
    }
}

export default HomePage;
