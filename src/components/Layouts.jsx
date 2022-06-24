import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Avatar, Col, Layout, Menu } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;
export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("loginUser");
    navigate("/login");
  };
  const { user } = useAuth();

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu theme="dark">
            <Title level={2}>
              <h1 style={{ color: "white" }}>Menu</h1>
            </Title>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/list">List</Link>
            </Menu.Item>
            <Menu.Item onClick={logOutHandler}>LogOut </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Header className="header">
            <Menu theme="dark" mode="horizontal">
              <Col className="gutter-row" span={20}>
                <Title level={2}>
                  <Text type="warning">Hello {user.username}</Text>
                </Title>
              </Col>
              <Col className="gutter-row" span={4}>
                <Avatar size={"large"} icon={<UserOutlined />} />
              </Col>
            </Menu>
          </Header>

          <Outlet />
        </Content>
      </Layout>
    </div>
  );
}
