import { Form, Input, Button, Checkbox } from "antd";

const LoginForm = (props) => {
  const { onSubmit } = props;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        email: "leslyrevenge1@gmail.com",
        fullname: "Lesly Revenge 1",
        category: ["contributor", "admin"],
        password: "testing1",
        confirm_passowrd: "testing1",
      }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password size="large" />
      </Form.Item>

      <Form.Item>
        <Button size="large" block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
