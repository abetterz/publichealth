import React, { useState } from "react";
import { Form, Input, Button, Select, Checkbox, Collapse } from "antd";
import ImageUpload from "../../../../utils/imageUpload";
const { Panel } = Collapse;

const PostForm = (props) => {
  const { onSubmit, loading } = props;
  const [form] = Form.useForm();
  const [collapsed, toggleCollapsed] = useState();
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

  const categories = [
    {
      label: "Exclusive",
      value: "exclusive",
    },
    {
      label: "Must Read",
      value: "must_read",
    },
    {
      label: "Updated Daily",
      value: "updated_daily",
    },
    {
      label: "Breaking News",
      value: "breadking_news",
    },
    {
      label: "Front Page",
      value: "front_page",
    },
    {
      label: "Regular News",
      value: "news",
    },
  ];

  const bool = [
    {
      label: "True",
      value: true,
    },
    {
      label: "False",
      value: false,
    },
  ];

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

      <Form.Item
        label="Content Categories"
        name="categories"
        rules={[
          {
            required: true,
            message: "Please input your fullname!",
          },
        ]}
      >
        <Select size="large" mode="multiple">
          {categories.map((contributor) => {
            return (
              <Select.Option value={contributor.value} key={contributor.value}>
                {contributor.label}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Button
        style={{ marginBottom: 30 }}
        type="link"
        block
        onClick={() => toggleCollapsed(!collapsed)}
      >
        Overide Content
      </Button>
      {collapsed && (
        <div>
          <Form.Item label="Date Published" name="date_published">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input size="large" />
          </Form.Item>

          <Form.Item label="Hide Image?" name="hide_image">
            <Select size="large">
              {bool.map((contributor) => {
                return (
                  <Select.Option
                    value={contributor.value}
                    key={contributor.value}
                  >
                    {contributor.label}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item label="Overide Scraped Image" name="image">
            <ImageUpload SetFieldsValue={SetFieldsValue} {...upload} />
          </Form.Item>
        </div>
      )}
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

export default PostForm;
