import React, { useEffect, useState } from "react";
import {
  Radio,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Collapse,
  Result,
} from "antd";
import ImageUpload from "../../../utils/imageUpload";
import GetLists from "../../generator/lists";
import { FA } from "../../../utils/product";
import moment from "moment";
import { connect } from "react-redux";
import { create, drop, read } from "../../../redux/actions/master";

const { Panel } = Collapse;

function SubscribeForm(props) {
  const { onSubmit, onArchieved } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState();
  const [successMessage, setSuccess] = useState();

  const handleOnSubmit = async (payload) => {
    setLoading(true);
    let res = await props.create({
      key: "subscribe",
      payload,
      replace: true,
    });

    if (res.status === 201) {
      setLoading(false);
    }
  };

  return (
    <Row>
      {!successMessage ? (
        <Col span={24}>
          <Form
            name="basic"
            onFinish={handleOnSubmit}
            autoComplete="off"
            layout="vertical"
            form={form}
          >
            <Form.Item
              placeholder="Full Name"
              name="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input placeholder="Full Name" allowClear size="large" />
            </Form.Item>
            <Form.Item
              placeholder="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input placeholder="Email" allowClear size="large" />
            </Form.Item>
            <Form.Item
              placeholder="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Button
                htmlType="submit"
                loading={loading}
                type="primary"
                block
                size="large"
              >
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </Col>
      ) : (
        <Col span={24}>
          <Result
            status="success"
            title="Successfully Registered To Our News Letter"
            subTitle="Thank you, we'll be in touch"
          />
        </Col>
      )}
    </Row>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { create, drop, read };

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeForm);
