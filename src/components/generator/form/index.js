import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "antd";

import "./form.scss";
import { ButtonLoading, FA, restrictFields } from "../../../utils/product";

import GetConfig, { dataTransformation } from "./config";
import GetField from "../fields";

const FormItem = Form.Item;

const FormGenerator = (props) => {
  const [collapsed, setCollapsed] = useState({});
  const [state, setState] = useState({ location_view: {} });

  let {
    dict_key,
    past_on,
    getFieldsValue,
    callback,
    remove_field,
    pass_on_props,
    onSelectFetchedField,
    restrictions,
    place_configs,
    dynamic_props = {},
    btn_props = {},
    loading,
    errors = [],
    onMouseEnter,
    form_props = {},
    got_values,
    data,
    left_btn,
  } = props;

  const [form] = Form.useForm();

  got_values = got_values || data || {};

  useEffect(() => {
    const transformed_data = dataTransformation(data, dict_key);
    form.setFieldsValue(transformed_data);

    if (props.location_view) {
      setState({ ...state, location_view: props.location_view });
    }
  }, []);
  let GotConfig =
    GetConfig(dict_key, (fields) =>
      restrictFields(fields, restrictions, { dict_key })
    ) || [];

  const onClickField = (obj = {}) => {
    if (props.setSelectedField) {
      props.setSelectedField(obj);
    }
  };

  const onChangeField = (obj) => {
    if (props.onChangeField) {
      props.onChangeField(obj);
    }
  };

  const onFinish = async () => {
    let values = form.getFieldsValue();
    const res = props.onSubmit && (await props.onSubmit(values, form));

    if (res && res.data) {
      await form.resetFields();
    }
  };

  const handleSelectPlace = async (payload) => {
    const { key, value } = payload;
    let location_view = {
      ...state.location_view,
      [key]: value,
    };

    setState({ ...state, location_view });

    let field_value = [];
    let got_view = location_view[key] || [];
    got_view.forEach((element) => {
      if (element._id) {
        field_value.push(element._id);
      }
    });
    await form.setFieldsValue({ [key]: field_value });
  };

  const handleRemovePlace = async (key, _id) => {
    let values = state.location_view[key] || {};

    values = values.filter((item) => {
      return item._id !== _id;
    });
    let location_view = {
      ...state.location_view,
      [key]: values,
    };
    await setState({ ...state, location_view });
    await form.setFieldsValue({ [key]: values && values[0] && values });
  };

  return (
    <Form
      onFinish={(values) => onFinish(values, form)}
      form={form}
      layout={props.layout || "vertical"}
      className="dark_theme"
      {...form_props}
    >
      <Row gutter={12}>
        {GotConfig.map((main_field, main_index) => {
          if (main_field.sub_fields) {
            let sub_fields = main_field.sub_fields;

            return (
              <Col key={main_index} span={24}>
                <Row
                  className="form_separator  pointer"
                  justify="space-around"
                  align="middle"
                  onClick={() =>
                    setCollapsed({
                      ...collapsed,
                      [main_field.name]: !collapsed[main_field.name],
                    })
                  }
                >
                  <Col span={16}>{main_field.label}</Col>
                  <Col span={6} className="text_right ">
                    <FA
                      icon={
                        collapsed[main_field.name]
                          ? "fas fa-door-closed"
                          : "fas fa-door-open"
                      }
                    ></FA>
                  </Col>
                </Row>
                <Row
                  className={collapsed[main_field.name] ? "show" : "hide"}
                  gutter={12}
                >
                  <Col span={24}>
                    <Row gutter={12}>
                      {sub_fields &&
                        sub_fields.map((field, index) => {
                          let name = field.field.config.name;

                          let past_on_config =
                            (past_on &&
                              past_on[field.config && field.config.name]) ||
                            {};

                          const span = field.span || {
                            xs: 24,
                            sm: 24,
                            md: 24,
                            lg: 24,
                            xl: 24,
                            xxl: 24,
                          };
                          const className = field.className || "";

                          let got_value = got_values[name];

                          const GotField = GetField(field.type, {
                            callback,
                            errors,
                          });
                          let error =
                            errors &&
                            errors.form &&
                            errors.form.find((err) => err.key === name);
                          error = error && error.error;

                          return (
                            <Col
                              onMouseEnter={onMouseEnter}
                              key={index}
                              className={className}
                              {...span}
                            >
                              <GotField
                                error={error}
                                onClick={onClickField}
                                got_value={got_value}
                                FormItem={FormItem}
                                getFieldsValue={getFieldsValue}
                                setLocationValues={props.setLocationValues}
                                onSelectFetchedField={onSelectFetchedField}
                                place_configs={place_configs}
                                handleSelectPlace={handleSelectPlace}
                                callback={callback}
                                location_view={state.location_view}
                                dict_key={dict_key}
                                remove_field={remove_field}
                                setFormValues={props.setFormValues}
                                onChangeField={onChangeField}
                                {...field.field}
                                {...past_on_config}
                                pass_on_props={pass_on_props}
                                setFieldsValue={form.setFieldsValue}
                                onRemove={(id) =>
                                  handleRemovePlace(field.field.config.name, id)
                                }
                                location_values={props.location_values}
                                restrictions={restrictions}
                                {...dynamic_props}
                              />
                            </Col>
                          );
                        })}
                    </Row>
                  </Col>
                </Row>
              </Col>
            );
          } else {
            const GotField = GetField(main_field.type, callback);
            const span = main_field.span || {
              xs: 24,
              sm: 24,
              md: 24,
              lg: 24,
              xl: 24,
              xxl: 24,
            };
            const className = main_field.className || "";
            let name = main_field.field.config.name;
            let got_value = got_values[name];

            let past_on_config =
              (past_on &&
                past_on[
                  main_field.field.config && main_field.field.config.name
                ]) ||
              {};

            let error =
              errors &&
              errors.form &&
              errors.form.find((err) => err.key === name);
            error = error && error.error;

            return (
              <Col key={main_index} className={className} {...span}>
                <GotField
                  onClick={onClickField}
                  dict_key={dict_key}
                  got_value={got_value}
                  FormItem={FormItem}
                  getFieldsValue={getFieldsValue}
                  setFieldsValue={form.setFieldsValue}
                  onSelectFetchedField={onSelectFetchedField}
                  callback={callback}
                  onChangeField={onChangeField}
                  setLocationValues={props.setLocationValues}
                  setFormValues={props.setFormValues}
                  place_configs={place_configs}
                  handleSelectPlace={handleSelectPlace}
                  remove_field={remove_field}
                  location_view={state.location_view}
                  {...main_field.field}
                  {...past_on_config}
                  pass_on_props={pass_on_props}
                  onRemove={(id) =>
                    handleRemovePlace(main_field.field.config.name, id)
                  }
                  location_values={props.location_values}
                  restrictions={restrictions}
                  {...dynamic_props}
                  error={error}
                />
              </Col>
            );
          }
        })}
      </Row>
      <Row justify="space-between" align="middle">
        <Col span={12}>
          {left_btn && left_btn.props && (
            <Button {...left_btn.props}>{left_btn.label}</Button>
          )}
        </Col>

        <Col className="text_right" span={12}>
          <ButtonLoading loading={loading} btn_props={btn_props}>
            {btn_props.label || "Submit"}
          </ButtonLoading>
        </Col>
      </Row>
    </Form>
  );
};

export default FormGenerator;
