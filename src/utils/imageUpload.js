import React, { useState, useEffect } from "react";
import ImgCrop from "antd-img-crop";
import { Upload, Row, Col, Radio } from "antd";
import { FA } from "./product";
import { getIndie } from "../redux/api";

const ImageUpload = (props) => {
  let {
    setFormValues,
    SetFieldsValue,
    deco,
    config,
    got_value,
    indie,
    field_props,
    onChangeField,
    setFieldsValue,
  } = props;
  let { aspect, icon, max } = deco;
  let { link } = indie || {};

  let handlePhotoUpload = async (value) => {
    let payload = value;

    if (field_props.max === 1) {
      payload = value[0];
    }
    SetFieldsValue && (await SetFieldsValue({ [config.name]: payload }));

    if (payload && onChangeField) {
      await onChangeField({ key: config.name, value, set_value: true });

      setFieldsValue && (await setFieldsValue({ [config.name]: payload }));
      await setFormValues({ [config.name]: payload });
    }
  };

  let upload_image_link = process.env.REACT_APP_UPLOAD_IMAGE_LINK;

  upload_image_link =
    upload_image_link || getIndie(link || "upload_image_link");

  max = max || 1;

  const [fileList, setFileList] = useState([]);
  useEffect(() => {}, []);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    let payload = [];
    handlePhotoUpload(payload);

    if (newFileList) {
      newFileList.map((item) => {
        if (item.status === "done" && item.response) {
          payload.push(item.response.mediaLink);
          handlePhotoUpload(payload);
        }
        return "";
      });
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const [crop, setCrop] = useState(true);
  const [directory, setDirectory] = useState(false);

  const cropImageChange = (e) => {
    setCrop(e.target.value);
  };
  const directoryChange = (e) => {
    setDirectory(e.target.value);
  };

  let WithCrop = (
    <>
      <ImgCrop aspect={aspect || 5 / 1} rotate>
        <Upload
          action={upload_image_link}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          multiple={max > 1 ? true : false}
        >
          {fileList.length < max && <FA icon={icon} />}
        </Upload>
      </ImgCrop>
    </>
  );

  let WithNoCrop = (
    <>
      <Upload
        action={upload_image_link}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        directory={directory}
        multiple={max > 1 ? true : false}
      >
        {fileList.length < max && <FA icon={icon} />}
      </Upload>
    </>
  );

  let ImageField = directory || !crop ? WithNoCrop : WithCrop;

  let hide = deco.hide;
  let hide_type;
  let hide_folder;
  if (hide) {
    hide_type = hide.includes("type");
    hide_folder = hide.includes("folder");
  }

  let output = (
    <Row gutter={16} justify="space-between" align="middle">
      {!hide_type && (
        <Col span={24} className="margin_bottom_15">
          <Radio.Group defaultValue={crop} onChange={cropImageChange}>
            <Radio.Button value={true}>Image</Radio.Button>
            <Radio.Button value={false}>File</Radio.Button>
          </Radio.Group>
        </Col>
      )}
      {!hide_folder && (
        <Col span={24} className="margin_bottom_15">
          <Radio.Group defaultValue={directory} onChange={directoryChange}>
            <Radio.Button value={false}>Single</Radio.Button>
            <Radio.Button value={true}>Folder</Radio.Button>
          </Radio.Group>
        </Col>
      )}
      <Col>{ImageField}</Col>
      <Col>
        {got_value && got_value[0] && <FA icon="fas fa-arrow-circle-right" />}
      </Col>
    </Row>
  );

  return output;
};

export default ImageUpload;
