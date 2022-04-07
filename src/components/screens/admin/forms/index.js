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
  DatePicker,
} from "antd";
import ImageUpload from "../../../../utils/imageUpload";
import GetLists from "../../../generator/lists";
import { FA } from "../../../../utils/product";
import moment from "moment";
import GetForm from "../../../admin/forms";

const { Panel } = Collapse;

const PostForm = (props) => {
  const { onSubmit, loading, onArchieved } = props;
  const [form] = Form.useForm();
  const [collapsed, toggleCollapsed] = useState();
  const [isEdit, submitIsEdit] = useState();
  const [imageType, setImageType] = useState("upload_image");
  const [initialValues, setInitialValues] = useState({});

  const SetInitialValues = (props) => {};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const upload = {
    config: {
      name: "image",
      label: "Add Private Files",
    },
    deco: {
      aspect: 2 / 1,
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
  const onClickClearFields = () => {
    form.resetFields();
    submitIsEdit();
  };
  const handleOnSubmit = async (values) => {
    let res = await onSubmit(values, isEdit);

    console.log(values, "handleOnSubmit");

    if (res && res.status === 201) {
      form.resetFields();
      submitIsEdit();
    }
  };

  const handleOnEdit = (payload) => {
    let published_on = moment(payload.published_on || Date.now(), "YYYY/MM/DD");

    let product = {
      ...payload,
      published_on,
    };

    if (!payload.published_on) {
      delete product.published_on;
    }

    form.setFieldsValue(product);
    submitIsEdit(true);
  };
  const handleSetImageType = (e) => {
    console.log(e.target, "handleSetImageType");
    setImageType(e.target.value);
  };

  const categories = [
    {
      label: "Exclusive",
      value: "exclusive_stories",
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

  const span_left = {
    xs: 0,
    sm: 0,
    md: 12,
    lg: 10,
    xl: 8,
    xxl: 8,
  };
  const span_right = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 14,
    xl: 16,
    xxl: 16,
  };

  const GotList = GetLists(props.section);
  const GotForm = GetForm(props.section);

  let buttonTitle = props.isEdit ? "Update" : "Add New";

  return (
    <Row>     {props.section === 'analytics' ? <></> : <Col {...span_left}>
    <Form
      name="basic"
      initialValues={initialValues || {}}
      onFinish={handleOnSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      form={form}
    >
      <GotForm
      loading={props.loading}
      onClickClearFields={onClickClearFields}
      isEdit={isEdit}
      SetFieldsValue={SetFieldsValue}
    />
    </Form>
  </Col>}
  {props.section === 'analytics' ? 
    <GotList
      SetFieldsValue={props.SetFieldsValue}
      onArchieved={onArchieved}
      handleOnEdit={handleOnEdit}
      onDrop={props.onDrop}
      section={props.section}
    />
    : <Col {...span_right}>
    <GotList
      SetFieldsValue={props.SetFieldsValue}
      onArchieved={onArchieved}
      handleOnEdit={handleOnEdit}
      onDrop={props.onDrop}
      section={props.section}
    />
  </Col>}
    </Row>
  );
};

export default PostForm;
