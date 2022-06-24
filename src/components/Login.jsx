import { Button, Form, Input } from "antd";
import { notification } from "antd";
import { useEffect } from "react";
import useRegister from "./useRegister";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { Typography } from "antd";
const { Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const isRegister = useRegister;
  const { isLogin } = useAuth();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const userNamePasswordError = () => {
    api.info({
      message: `userName and Password not correct`,
      placement: "topRight",
      duration: 2,
      style: { backgroundColor: "red" },
    });
  };

  const loginHandler = (values) => {
    if (isRegister(values)) {
      localStorage.setItem("loginUser", JSON.stringify(values));
      navigate("/");
    } else {
      userNamePasswordError();
    }
  };
  return (
    <div className="register_form">
      {contextHolder}

      <Form name="basic" onFinish={loginHandler} autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              min: 3,

              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Text
          onClick={() => navigate("/register")}
          style={{ color: "blue", padding: "10px" }}
        >
          click Here for Registeration
        </Text>
      </Form>
    </div>
  );
};

export default Login;
