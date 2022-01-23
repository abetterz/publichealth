import { Form, Input, Button, Checkbox, Select } from "antd";
import ImageUpload from "../../../../utils/imageUpload";

const LoginForm = (props) => {
  const { onSubmit, loading } = props;
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const upload = {
    config: {
      name: "image",
      label: "Add Private Files",
    },
    deco: {
      aspect: 1 / 1,
      icon: "fas fa-camera-retro",
      hide: ["type", "folder"],
    },
    field_props: {
      max: 1,
      placeholder: "Add Private Files",
    },
    values: {},
    indie: {
      link: "papi_private_files",
    },
  };

  const SetFieldsValue = (payload) => {
    console.log(payload, "handlePhotoUpload");

    form.setFieldsValue(payload);
  };

  return (
    <Form
      name="basic"
      initialValues={{}}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      form={form}
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
        label="Addressing"
        name="addressing"
        rules={[
          {
            required: true,
            message: "How do we address this expert",
          },
        ]}
      >
        <Input placeholder="i.e. Dr, Mr." size="large" />
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

      <Form.Item label="Upload Image" name="image">
        <ImageUpload SetFieldsValue={SetFieldsValue} {...upload} />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          size="large"
          block
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
