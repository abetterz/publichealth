import React, { useState } from "react";
import { Col, Row, Form, Spin } from "antd";

import LocationSearchInput from "../../api/locationSearchInput";
import ImageUpload from "../../../utils/imageUpload";

const BusinessCard = () => {
  return <div></div>;
};

const FormItem = Form.Item;

export const UploadImage = (props) => {
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
    setFieldsValue && (await setFieldsValue({ [name]: payload }));

    if (payload && onChangeField) {
      await onChangeField({ key: config.name, value, set_value: true });

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

export const SelfOrPlace = (props) => {
  const {
    config,
    field_props,
    onClick,
    onChangeField = (f) => f,
    handleSelectPlace,
    indie = {},
  } = props;
  const [loading, setLoading] = useState(false);

  let existing =
    (props.location_view && props.location_view[config.name]) || [];
  const handleSelect = (place, place_id, res) => {
    setLoading(true);
    let max = field_props.max || 1000;

    if (res && res.data) {
      let found =
        existing && existing.find((item) => item.place_id === place_id);
      if (!found) {
        if (existing.length < max) {
          existing.push(res.data);
        }
      }
      let payload = { key: config.name, value: existing, set_value: true };
      onChangeField(payload);
      handleSelectPlace(payload);
      props.setLocationValue &&
        props.setLocationValues({ [config.name]: existing });
    }
    setLoading(false);
  };
  let businesses = existing.map((item, key) => {
    return (
      <Col key={key} span={24} className="margin_bottom_5">
        <BusinessCard {...item} onRemove={() => props.onRemove(item._id)} />
      </Col>
    );
  });

  const handleOnClick = async (value) => {
    let payload = { field_key: config.name };
    onClick(payload);
  };

  let location_view_length =
    (props.location_view &&
      props.location_view[config.name] &&
      props.location_view[config.name].length) ||
    0;
  let max = indie.max || 10000;

  return (
    <FormItem {...config}>
      {!loading ? (
        <Row>
          <Col span={24} className="">
            {businesses}
          </Col>
          <Col span={24}>
            {location_view_length < max && (
              <LocationSearchInput
                onClick={handleOnClick}
                wrapper={Form.Item}
                wrapper_components={config}
                handlePlaceSelect={handleSelect}
                field_props={field_props}
              />
            )}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={24}>
            <Spin />
          </Col>
        </Row>
      )}
    </FormItem>
  );
};
