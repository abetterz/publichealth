import { Form, Input, Button, Checkbox, Select } from "antd";

const LoginForm = (props) => {
  const { onSubmit } = props;
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const contributors = [
    {
      label: "Content Contributor",
      value: "contributor",
    },
    {
      label: "Doctors & Scientists",
      value: "doctors_scientists",
    },
    {
      label: "Other Experts",
      value: "experts",
    },
    {
      label: "Media & Site Owners",
      value: "media",
    },
    {
      label: "Request Admin Access",
      value: "admin",
    },
  ];
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
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
        label="Fullname"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your fullname!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label="Contributor Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Please input your fullname!",
          },
        ]}
      >
        <Select size="large" mode="multiple">
          {contributors.map((contributor) => {
            return (
              <Select.Option value={contributor.value} key={contributor.value}>
                {contributor.title}
              </Select.Option>
            );
          })}
        </Select>
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

      <Form.Item
        label="Confirm Password"
        name="confirm_password"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
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
