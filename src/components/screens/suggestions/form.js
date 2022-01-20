import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const SuggestionForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="suggestion"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item name="name" label="Full Name">
        <Input size="large" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[
          {
            required: true,
            message: "Please input your message",
          },
        ]}
      >
        <Input.TextArea rows={10} showCount maxLength={300} />
      </Form.Item>
      <Form.Item name="webiste" label="Suggested LInk">
        <Input size="large" />
      </Form.Item>

      <Form.Item>
        <Button
          size="large"
          block
          type="primary"
          color="black"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SuggestionForm;
