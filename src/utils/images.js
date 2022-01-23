import React from "react";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import ImageUpload from "./imageUpload";

export const FA = (props) => {
  let {
    popover_placement,
    popover_title,
    popover_trigger,
    popover_style,
    src,
    src_class,
    popover,
    onClick,
    show_question,
    link,
    product_props,
    onMounseEnter,
  } = props;

  let fa = (
    <i
      className={props.icon}
      onMouseEnter={onMounseEnter}
      onMouseLeave={onMounseEnter}
      style={props.style}
    ></i>
  );
  let svg = (
    <img
      alt="mallsett icon"
      src={src}
      className={src_class || "small_svg_icon"}
    />
  );
  product_props = product_props || {};
  if (onClick) {
    product_props.onClick = onClick;
  }
  let image_type = src ? svg : fa;
  let with_popover = (
    <span {...product_props} className={props.className || "margin-right-10"}>
      <Popover
        content={popover}
        placement={popover_placement}
        trigger={popover_trigger}
        title={popover_title}
        style={popover_style || { width: 100 }}
      >
        {image_type} {props.title}{" "}
        {show_question && (
          <i
            className={"far fa-question-circle"}
            onMouseEnter={onMounseEnter}
            style={props.style}
          ></i>
        )}
      </Popover>
    </span>
  );

  let without_popover = (
    <span {...product_props}>
      <span className={props.title_class}>
        {props.title_position && props.title_position === "left" && props.title}{" "}
      </span>
      {image_type}{" "}
      <span className={props.title_class}>
        {(!props.title_position || props.title_position === "right") &&
          props.title}
      </span>
    </span>
  );

  let output = popover ? with_popover : without_popover;
  output = link ? <Link to={link}>{output}</Link> : output;
  return output;
};

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

  // onChangeField = pass_on_props ? pass_on_props.onChangeField : onChangeField;

  const handleOnClick = async (value) => {
    onClick({ ...field_props, field_key: config.name });
  };

  console.log(props, "testing_item_here");
  return <ImageUpload {...props} deco={deco} handleOnClick={handleOnClick} />;
};
