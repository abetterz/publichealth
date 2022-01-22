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
        title: "title 1",
        link: "https://americasfrontlinedoctors.org",
      }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input a title",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label="Link"
        name="link"
        rules={[
          {
            required: true,
            message: "Please input a link",
          },
        ]}
      >
        <Input size="large" />
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
