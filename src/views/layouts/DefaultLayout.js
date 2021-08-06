import React from "react";
import { Layout, Menu } from "antd";
import { SolutionOutlined, ArrowLeftOutlined} from "@ant-design/icons";
import { Route, Switch, Link } from 'react-router-dom'
import routers from "../../routers";


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {
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
                        style={{ margin: "2.55rem 0 0 0" }}
                        theme="dark"
                        defaultSelectedKeys={["1"]}
                        mode="inline"
                    >
                        {
                            routers.map(menu => {
                                return !menu.children ? (
                                    <Menu.Item key={menu.path} icon={menu.icon}>
                                        <Link to={menu.path}>{menu.name}</Link>
                                    </Menu.Item>
                                ) : (
                                        <SubMenu key={menu.path} icon={<SolutionOutlined />} title={menu.name}>
                                        {
                                            menu.children.map(subMenu => {
                                                return <Menu.Item key={subMenu.path} icon={subMenu.icon} >
                                                    <Link to={subMenu.path}>{subMenu.name}</Link>
                                                </Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                        <Menu.Item key="1"  icon={<ArrowLeftOutlined />}>
                            <Link to='/login' onClick={()=>localStorage.clear()}>Logout</Link>
                        </Menu.Item>
                     
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    />
                    <Content style={{ margin: "0 16px" }}>
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 360 }}
                        >
                            <Switch>
                                {
                                    routers.map((menu) => {
                                        return !menu.children ? (
                                            <Route key={menu.path} path={menu.path}>{menu.component}</Route>
                                        ) : (
                                            menu.children.map((subMenu) => {
                                                return <Route key={subMenu.path} path={subMenu.path}>{subMenu.component}</Route>
                                            })
                                        )
                                    })
                                }
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;
