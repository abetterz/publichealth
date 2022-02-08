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

const { Panel } = Collapse;

const PostForm = (props) => {
  const { onSubmit, loading, onArchieved } = props;
  const [form] = Form.useForm();
  const [collapsed, toggleCollapsed] = useState();
  const [isEdit, submitIsEdit] = useState();
  const [imageType, setImageType] = useState("screenshot");
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    // props.SetInitialValues({ imageType: "upload_image" });
  }, []);

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

  const handleOnSubmit = async (values) => {
    await onSubmit(values, isEdit);

    // form.resetFields();
    // submitIsEdit();
  };

  const onClickClearFields = () => {
    form.resetFields();
    submitIsEdit();
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
      value: "breaking_news",
    },
    {
      label: "Featured Story",
      value: "featured_story",
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

  let buttonTitle = props.isEdit ? "Submit Update" : "Add New";

  return (
    <Row>
      <Col span={24}>
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
          <Input allowClear size="large" />
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
          <Input allowClear size="large" />
        </Form.Item>

        <Form.Item
          label="Content Categories"
          name="categories"
          rules={[
            {
              required: true,
              message: "Please input a categories",
            },
          ]}
        >
          <Select allowClear size="large" mode="multiple">
            {categories.map((contributor) => {
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
        <Button
          style={{ marginBottom: 30 }}
          type="link"
          block
          onClick={() => toggleCollapsed(!collapsed)}
        >
          Overide Content
        </Button>

        <Form.Item label="Get Image By" name="get_image">
          <Radio.Group
            onChange={handleSetImageType}
            style={{ marginBottom: 20 }}
            defaultValue="screenshot"
            size="large"
          >
            <Radio.Button value="external_link">External</Radio.Button>

            <Radio.Button value="upload_image">Upload</Radio.Button>
            <Radio.Button value="screenshot">Screenshot</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {imageType === "screenshot" && (
          <div>We will screenshot the link (default)</div>
        )}
        {imageType === "none" && <div>We will not include an image</div>}
        {imageType === "external_link" && (
          <Form.Item
            label={
              <FA
                popover_title="External Link"
                icon={"fas fa-info-circle"}
                title="Reference External Link"
                popover={
                  "Will not download the image and uploaded to the site. If this image change on the location it is referencing, the image on the site will also change. "
                }
              />
            }
            name="external_link"
          >
            <Input allowClear placeholder="Enter External Link" />
          </Form.Item>
        )}
        {imageType === "downloadable_link" && (
          <Form.Item
            label={
              <FA
                popover_title="Downloadable Link"
                icon={"fas fa-info-circle"}
                title="Downloadable Link"
                popover={
                  "We will download the image and upload it to our platform. If you simply want to reference the link, use External Link "
                }
              />
            }
            name="downloadable_link"
          >
            <Input placeholder="Enter Downloadable Link" />
          </Form.Item>
        )}
        {imageType === "upload_image" && (
          <Form.Item
            label={
              <FA
                popover_title="Upload Image"
                icon={"fas fa-info-circle"}
                title="Upload Image"
                popover={
                  "If you have an image downloaded already, you can simply upload it yourself. "
                }
              />
            }
            name="image"
          >
            <ImageUpload SetFieldsValue={props.SetFieldsValue} {...upload} />
          </Form.Item>
        )}

        {collapsed && (
          <div>
            <Form.Item label="Date Published" name="published_on">
              <DatePicker
                allowClear
                size="large"
                placeholder="Published On"
                className="full_width"
              />
            </Form.Item>
            <Form.Item label="Author" name="author">
              <Input allowClear size="large" />
            </Form.Item>
          </div>
        )}
        <Form.Item className="hidden" name="_id"></Form.Item>
        <Form.Item>
          <div style={{ textAlign: "center", padding: 10 }}>
            {loading &&
              imageType === "screenshot" &&
              "Screenshot may take up to 20 seconds"}
          </div>
          <Button
            loading={loading}
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            {buttonTitle}
          </Button>
          <div
            onClick={props.onClickClearFields}
            className="clear_field_button"
          >
            Clear Fields
          </div>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default PostForm;
