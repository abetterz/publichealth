import React from "react";
import { Form } from "antd";
import ImageUpload from "../../utils/imageUpload";

const FormItem = Form.Item;

export const UploadImage = (props) => {
  return "test";
};

export const UploadImage2 = (props) => {
  let {
    config,
    deco = {},
    field_props,
    onClick = (f) => f,
    onChangeField,
    pass_on_props,
    SetFieldsValue,
    setFieldsValue,
    setFormValues = (f) => f,
    place_configs,
  } = props;
  let { name } = config || {};
  setFieldsValue = pass_on_props
    ? pass_on_props.setFieldsValue
    : setFieldsValue;

  // onChangeField = pass_on_props ? pass_on_props.onChangeField : onChangeField;

  let handlePhotoUpload = async (value) => {
    let payload = value;
    let nozeform =
      place_configs && place_configs.set_config_noze && field_props.noze;
    if (nozeform) {
      deco.max = 100;
      field_props.max = 100;
    }
    if (field_props.max === 1) {
      payload = value[0];
    }

    if (payload && onChangeField) {
      await onChangeField({ key: config.name, value, set_value: true });

      setFieldsValue && (await setFieldsValue({ [name]: payload }));
      await setFormValues({ [name]: payload });
      SetFieldsValue && (await SetFieldsValue({ [name]: payload }));
    }
  };
  const handleOnClick = async (value) => {
    onClick({ ...field_props, field_key: config.name });
  };
  return (
    <FormItem {...config}>
      <ImageUpload
        {...props}
        deco={deco}
        handlePhotoUpload={handlePhotoUpload}
        handleOnClick={handleOnClick}
      />
    </FormItem>
  );
};
