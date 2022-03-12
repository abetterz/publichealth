import React from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  TimePicker,
  Col,
  Row,
} from "antd";
import GetOption from "../options";
import international_phone_number from "../options/phone_numbers";
import Checkbox from "antd/lib/checkbox/Checkbox";

const Option = Select.Option;
const FormItem = Form.Item;

export const SimpleCheckbox = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  delete config.label;
  return (
    <FormItem {...config} initialValue={got_value}>
      <Checkbox
        onClick={handleOnClick}
        {...field_props}
        onChange={(value) => onChangeField({ key: config.name, value })}
      >
        {field_props.placeholder}
      </Checkbox>
    </FormItem>
  );
};

export const SimpleInput = (props) => {
  let {
    field_props,
    config,
    onChange,
    got_value,
    onClick = (f) => f,
    onChangeField = (f) => f,
    place_configs,
    error,
  } = props;
  if (onChange) {
    field_props.onChange = onChange;
  }
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  let SimpleInputType = Input;
  if (field_props.input_type === "number") {
    SimpleInputType = InputNumber;
  } else if (field_props.input_type === "text_area") {
    SimpleInputType = Input.TextArea;
  }

  let field = (
    <SimpleInputType
      onClick={handleOnClick}
      {...field_props}
      onChange={(value) => onChangeField({ key: config.name, value })}
    />
  );

  let noze = (
    <Select
      allowClear
      tokenSeparators={["<|"]}
      {...field_props}
      mode={"tags"}
      onClick={handleOnClick}
      onChange={(value) => onChangeField({ key: config.name, value })}
    ></Select>
  );

  if (error) {
    config.help = error;
    config.validateStatus = "error";
  } else {
    config.help = null;
    config.validateStatus = null;
  }

  return (
    <FormItem {...config} initialValue={got_value}>
      {field_props.noze && place_configs && place_configs.set_config_noze
        ? noze
        : field}
    </FormItem>
  );
};

export const SimplePassword = (props) => {
  let {
    field_props,
    config,
    onChange,
    got_value,
    onClick = (f) => f,
    onChangeField = (f) => f,
    error,
  } = props;
  if (onChange) {
    field_props.onChange = onChange;
  }
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  if (error) {
    config.help = error;
    config.validateStatus = "error";
  } else {
    config.help = null;
    config.validateStatus = null;
  }
  return (
    <FormItem {...config} initialValue={got_value}>
      <Input.Password
        onClick={handleOnClick}
        {...field_props}
        onChange={(value) => onChangeField({ key: config.name, value })}
      />
    </FormItem>
  );
};

export const SimpleNumber = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };
  return (
    <FormItem {...config} initialValue={got_value}>
      <InputNumber
        onClick={handleOnClick}
        {...field_props}
        onChange={(value) => onChangeField({ key: config.name, value })}
      />
    </FormItem>
  );
};

export const SimpleSelect = (props) => {
  let {
    field_props,
    indie = {},
    config,
    onClick,
    onChangeField = (f) => f,
  } = props;

  let { option_key } = indie;
  let GotOption = GetOption({ dict_key: option_key });
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };
  return (
    <FormItem {...config}>
      <Select
        allowClear
        tokenSeparators={["<|"]}
        {...field_props}
        onClick={handleOnClick}
        onChange={(value) => onChangeField({ key: config.name, value })}
      >
        {GotOption}
      </Select>
    </FormItem>
  );
};

export const SimpleTextArea = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };
  return (
    <FormItem {...config} initialValue={got_value}>
      <Input.TextArea
        onClick={handleOnClick}
        {...field_props}
        onChange={(value) => onChangeField({ key: config.name, value })}
      />
    </FormItem>
  );
};

// export class SimpleQuill extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { editorHtml: "", theme: "snow" };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(html) {
//     this.setState({ editorHtml: html });
//     this.props.onChangeFieldQuill({ [this.props.config.name]: html });
//   }

//   render() {
//     let formats = [
//       "header",
//       "font",
//       "size",
//       "bold",
//       "italic",
//       "underline",
//       "strike",
//       "blockquote",
//       "list",
//       "bullet",
//       "indent",
//     ];

//     let modules = {
//       toolbar: [
//         [{ size: [] }],
//         ["bold", "italic", "underline", "strike", "blockquote"],
//         [
//           { list: "ordered" },
//           { list: "bullet" },
//           { indent: "-1" },
//           { indent: "+1" },
//         ],
//         // ["link", "image", "video"],
//         ["clean"],
//       ],
//       clipboard: {
//         // toggle to add extra line breaks when pasting HTML:
//         matchVisual: false,
//       },
//     };

//     return (
//       <div>
//         <ReactQuill
//           theme={this.state.theme}
//           onChange={this.handleChange}
//           value={this.state.editorHtml}
//           modules={modules}
//           formats={formats}
//           bounds={".app"}
//           placeholder={this.props.placeholder}
//         />
//       </div>
//     );
//   }
// }

export const SimpleBoolean = (props) => {
  let { field_props, config, onClick } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  return (
    <FormItem {...config}>
      <Select onClick={handleOnClick} {...field_props}>
        <Option value={true}>True</Option>
        <Option value={false}>False</Option>
      </Select>
    </FormItem>
  );
};

export const SimpleDate = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  return (
    <FormItem {...config} initialValue={got_value}>
      <DatePicker
        placeholder={field_props.placeholder}
        onClick={handleOnClick}
        onChange={(value) => onChangeField({ key: config.name, value })}
        style={{
          width: "100%",
        }}
      />
    </FormItem>
  );
};

export const SimpleTime = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };
  const format = "HH:mm";

  return (
    <FormItem {...config} initialValue={got_value}>
      <TimePicker
        onClick={handleOnClick}
        {...field_props}
        style={{
          width: "100%",
        }}
        showNow={false}
        use12Hours
        format={format}
        onChange={(value) => onChangeField({ key: config.name, value })}
      />
    </FormItem>
  );
};

export const SimplePhoneNumber = (props) => {
  let {
    field_props,
    config,
    onChange,
    onClick = (f) => f,
    onChangeField = (f) => f,
    error,
  } = props;
  const { Option } = Select;

  if (onChange) {
    field_props.onChange = onChange;
  }
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  const selectBefore = (
    <Form.Item name="country_code" noStyle>
      <Select
        showSearch
        style={{ minWidth: 100 }}
        defaultValue={"+1"}
        className="select-before"
      >
        {international_phone_number.map((phone_number, index) => {
          let prefix = phone_number.value;
          return (
            <Option key={index} value={prefix}>
              {prefix} ({phone_number.label})
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  let SimpleInputType = Input;
  if (field_props.input_type === "number") {
    SimpleInputType = InputNumber;
  } else if (field_props.input_type === "text_area") {
    SimpleInputType = Input.TextArea;
  }

  if (error) {
    config.help = error;
    config.validateStatus = "error";
  } else {
    config.help = null;
    config.validateStatus = null;
  }

  return (
    <FormItem {...config}>
      <SimpleInputType
        addonBefore={selectBefore}
        onClick={handleOnClick}
        {...field_props}
        onChange={(value) => onChangeField({ key: config.name, value })}
      />
    </FormItem>
  );
};

export const SimpleVerification = (props) => {
  let {
    config,
    field_props,
    FormItem,
    got_value,
    onClick,
    onChangeField = (f) => f,
    indie = {},
  } = props;
  const handleOnClick = async (value) => {
    let payload = { ...field_props, field_key: config.name };
    onClick(payload);
  };

  const { count = 1 } = indie;

  let output = [];

  let span = 24 / count;

  while (count > output.length) {
    output.push(
      <Col span={span}>
        <FormItem
          {...config}
          name={config.name + "_" + output.length}
          initialValue={got_value}
          noStyle
        >
          <Input
            onClick={handleOnClick}
            {...field_props}
            onChange={(value) => onChangeField({ key: config.name, value })}
          />
        </FormItem>
      </Col>
    );
  }

  return <Row gutter={8}>{output}</Row>;
};
