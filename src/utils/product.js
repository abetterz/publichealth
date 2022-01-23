import React from "react";
import { Popover, Col, Button, Steps, Row } from "antd";
import { format } from "number-currency-format";
import { Link } from "react-router-dom";
import moment from "moment";

export function MyLink(props) {
  const Abled = <Link to={props.to}>{props.children}</Link>;
  let Disabled = <>{props.children}</>;

  return props.disabled ? Disabled : Abled;
}
export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getFormValues(values) {
  return values;
}

export function getProductCount(batches) {
  let output = 0;
  if (batches) {
    let filtered = batches.filter((batch) => {
      return !batch.removed;
    });

    filtered.forEach((batch) => {
      if (batch.clicks) {
        batch.clicks.forEach((click) => {
          output += click.selected.qty;
        });
      }
    });
  }
  return output;
}

export const removeComma = (load) => {
  let output;

  if (load) {
    if (Array.isArray(load)) {
      output = load.map((item) => {
        return item.replaceAll("_", " ");
      });
      output = output.join(", ");
    } else {
      output = load.replaceAll("_", " ");
    }
  }
  return output;
};

export const ShowPlaceFromString = (location, d) => {
  let output;

  if (location) {
    if (Array.isArray(location)) {
      output = location.map((item) => {
        if (typeof item === "string") {
          return JSON.parse(item);
        } else {
          return item;
        }
      });
    }
  }
  return output;
};
export const customePriceAgent = (args) => {
  let { min, max, qty, price } = args;
  if (typeof qty !== "number" || qty < min) {
    qty = min;
  }
  let fixed_qty = qty > max ? max : qty;
  let pricing = price < 1 ? 1 : price;
  pricing = pricing * fixed_qty;
  return pricing;
};
export const FormatPrice = ({ price, free, prefix, suffix }) => {
  let price_output = price;
  if (!price || price === 0) {
    return free || "Free";
  }
  if (price < 0) {
    price_output = ~price + 1;
  }
  let output = format(price_output, {
    currency: "$",
    spacing: false,
    currencyPosition: "LEFT",
  });

  if (price < 0) {
    output = "-" + output;
  }
  if (prefix) {
    output = prefix + " " + output;
  }
  if (suffix) {
    output = output + " " + suffix;
  }
  return output;
};

export const AssociateGenearator = (associates) => {
  let output = [];
  let skip = [];
  let associate_entries = Object.entries(associates);

  associate_entries.forEach((element) => {
    element[1] &&
      element[1].forEach((associate) => {
        let { name, icon, logo, formatted_address, headquarter } =
          associate || {};
        let got_image = (logo && logo[0] && logo[0].url) || icon;
        if (name && got_image && !skip.includes(element[1]._id)) {
          let payload = {
            name,
            icon: got_image,
            formatted_address,
            type: element[0],
          };

          if (
            headquarter &&
            headquarter[0] &&
            headquarter[0].formatted_address
          ) {
            payload.formatted_address = headquarter[0].formatted_address;
          }
          skip.push(element[1]._id);
          output.push(payload);
        }
      });
  });

  return output;
};

export const CombinedDoc = (list = {}) => {
  let output = {};

  let entries = Object.entries(list);
  entries.forEach((element) => {
    if (output[element[0]]) {
      if (element[1]) {
        element[1].forEach((opt) => {
          output[element[0]].push(opt);
        });
      }
    } else {
      if (element[1]) {
        output[element[0]] = [];

        element[1].forEach((opt) => {
          output[element[0]].push(opt);
        });
      }
    }
  });
  return output;
};

export const FindOption = ({ product_id, variation_id, option_id }, q) => {
  let output = false;
  if (product_id === q.product_id) {
    if (variation_id === q.variation_id) {
      if (option_id === q.option_id) {
        output = true;
      }
    }
  }
  return output;
};

export const FindSetOption = ({ product_id, variation_id, option_id }, q) => {
  let output = false;
  let multiple = ["checkbox", "multiple", "tags"];

  if (product_id === q.product_id) {
    if (variation_id === q.variation_id) {
      output = true;
      if (option_id === q.option_id && multiple.includes(q.type)) {
        output = true;
      } else if (multiple.includes(q.type)) {
        output = false;
      }
    }
  }
  return output;
};

export const MergingArrays = (arr = [], config = {}, callback = (f) => f) => {
  let { part } = config;
  let got_arr = arr[0] ? arr : [];
  let output = [];
  got_arr.forEach((element) => {
    if (part) {
      let item = element || "";
      part.forEach((p) => {
        item = item[p];
      });
      output = [...output, ...item];
    } else {
      output = [...output, element];
    }
  });
  return callback([...new Set(output)]);
};

export const ProductDetailName = (props) => {
  let { pricing } = props;
  let formatted_price = !isNaN(pricing) ? pricing : 0;

  let output = format(formatted_price, {
    currency: "$",
    spacing: false,
    currencyPosition: "LEFT",
  });

  return <span>{output}</span>;
};

export const GetFixedPrice = function (x) {
  var num = 5.56789;
  var output = Number.parseFloat(num).toFixed(2);
  return output;
};

export const ButtonLoading = ({
  btn_props,
  children,
  loading,
  actions = {},
}) => {
  let got_props = btn_props || {
    block: true,
    className: "black_btn",
    disabled: loading,
  };
  return (
    <Button {...got_props} {...actions}>
      {loading ? <SpinLoading width={"fa-1x"} /> : children}
    </Button>
  );
};

export const getInitials = function (name) {
  let string = name || "";
  let initials;
  if (name) {
    var names = string.split(" ");
    initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
  }

  return initials;
};

export const SpinLoading = (props) => {
  let width = props.width || "fa-3x";
  return (
    <div className={` text_center ${props.className}`}>
      <i className={`fa fa-spinner fa-spin ${width} fa-fw`}></i>
    </div>
  );
};

export const ShowButton = ({ bool, label }) => {
  let output = bool && (
    <Col>
      <Button>{label}</Button>
    </Col>
  );
  return output;
};

export class FixPlaceOpeningHours {
  constructor(periods) {
    this.periods = periods;
    this.days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
  }
  openCloseBreakdown(periods) {
    let output = [];
    periods.forEach((period) => {
      if (
        period &&
        period.close &&
        period.open &&
        period.close.day === period.open.day
      ) {
        output.push(period);
      } else {
        let first_day = {
          ...period,
          close: { day: period.open.day, time: "2359" },
        };
        // let second_day = {
        //   ...period,
        //   open: { day: period.close.day, time: "0001" },
        // };
        output.push(first_day);
        // output.push(second_day);
      }
    });
    return output;
  }

  isOpen(periods, config = {}) {
    let date = new Date();
    let today = config.today || date.getDay();
    if (config.add_day) {
      today = config.add_day;
      if (today > 6) {
        let remainder = today - 7;
        today = -1 + remainder;
      }
    }
    let output = {};
    periods.forEach((item) => {
      let found_day = item.open.day === today;

      if (found_day) {
        var CurrentDate = moment().format();
        let business_date = moment().format("YYYY-MM-DD");
        var business_open = moment(item.open.time, "HHmm").format("HH:mm");
        var business_close = moment(item.close.time, "HHmm").format("HH:mm");
        var business_open_time = business_date + "T" + business_open;
        var business_close_time = business_date + "T" + business_close;

        let open = moment(CurrentDate).isBetween(
          business_open_time,
          business_close_time
        );
        let opening = moment(CurrentDate).isBefore(business_open_time);

        if (open) {
          output.isOpen = true;
          output.closeAt = moment(business_close_time);
        } else {
          if (opening) {
            // check for the earliest open date
            if (output.opensAtString) {
              let sooner = moment(business_open_time).isBefore(
                output.opensAtString
              );
              if (sooner) {
                output.opensAt = moment(business_open_time);
                output.opensAtString = business_open_time;
              }
            } else {
              output.opensAt = moment(business_open_time);
              output.opensAtString = business_open_time;
            }
          }
        }
      }
    });

    return output;
  }

  nextOpening(periods) {
    let output;
    this.days.forEach((day, index) => {
      if (!output) {
        let next_day = this.isOpen(periods, { add_day: index + 1 });
        if (next_day) {
          output = next_day;
        }
      }
    });
    return output;
  }

  run() {
    let new_period = this.openCloseBreakdown(this.periods);
    let isOpen = this.isOpen(new_period);
    return { ...isOpen };
  }
}

export const getPlaceOpeningHours = (periods) => {
  let fixPlaceOpeningHours = new FixPlaceOpeningHours(periods);
  let got_period = fixPlaceOpeningHours.run();

  // let new_periods = fixPlaceOpeningHours.openCloseBreakdown(periods);
  // const product_periods = parseGooglePlacesPeriods(new_periods);

  // const output = getCurrentState(product_periods);
  return got_period;
};

export const SanitizedService = (obj) => {
  let {
    delivery_service,
    existing_batch,
    selected = {},
    custom_pricing_agent = 0,
  } = obj;

  // todo: make sure service is open
  let { qty } = selected;
  let { aggragated_qty = 0, aggragated_total_price = 0 } = existing_batch;
  let got_qty = aggragated_qty;
  if (qty) {
    got_qty += qty;
  }
  let cost = aggragated_total_price;
  if (custom_pricing_agent) {
    cost += custom_pricing_agent;
  }

  let output = delivery_service;
  if (typeof delivery_service !== "object") {
    output = {};
  }
  let aggragate = 0;
  // calculate price adjuster
  let price_adjuster;
  if (delivery_service.computation_price_adjuster === "percent") {
    price_adjuster = cost * (delivery_service.price_adjuster * 0.01);
  } else {
    price_adjuster = delivery_service.price_adjuster;
  }
  aggragate += price_adjuster;

  // calculate base fee
  let base_fee = delivery_service.base_fee || 0;
  aggragate += base_fee;

  // calculate base fee
  let per_item = (delivery_service.per_item || 0) * got_qty;
  aggragate += per_item;

  let per_distance =
    (delivery_service.per_distance || 0) *
    ((existing_batch.total_distance || delivery_service.total_distance || 2) /
      4);
  aggragate += per_distance;
  if (
    delivery_service.minimum_fee &&
    delivery_service.minimum_fee > aggragate
  ) {
    aggragate = delivery_service.minimum_fee;
  } else if (
    delivery_service.maximum_fee &&
    delivery_service.maximum_fee < aggragate
  ) {
    aggragate = delivery_service.maximum_fee;
  }

  output.aggragate = aggragate;
  if (!output.no_tax) {
    output.aggragate_tax = (output.tax || 7) * aggragate * 0.01;
  }

  return output;
};

export const OrderSteps = (props) => {
  const { current_status } = props;
  let dict = {
    placed: {
      default: { label: "Placed" },
      pending: { label: "Placed" },
    },
    received: {
      default: { label: "Received" },
    },
    ready: {
      default: { label: "Ready" },
      blocked: { label: "Blocked" },
    },
    delivered: {
      default: { label: "Delivered" },
      refund: { label: "Refunded" },
      complete: { label: "Complete" },
    },
  };

  if (current_status === "enroute") {
    dict.enroute = {
      default: { label: "Enroute" },
    };
  }

  let dict_key = {
    placed: {
      label: "Placed",
      key: 0,
    },
    pending: {
      label: "Pending",
      key: 0,
    },
    received: {
      label: "Received",
      key: 1,
    },
    ready: {
      label: "Ready",
      key: 2,
    },
    blocked: {
      label: "Blocked",
      key: 2,
    },
    delivered: {
      label: "Delivered",
      key: 3,
    },
    refund: {
      label: "Refund",
      key: 3,
    },
    complete: {
      label: "Complete",
      key: 3,
    },
  };

  let keys = Object.keys(dict);
  const current = dict_key[current_status];
  let got_current;

  return (
    <Steps
      // direction={direction || "vertical"}
      color="green"
      size="small"
      current={current && current.key}
    >
      {keys.map((item) => {
        let this_current = dict[item] && dict[item][current_status];
        if (this_current) {
          got_current = this_current;
        }
        let product = got_current || (dict[item] && dict[item].default);
        return this_current || (!this_current && !got_current) ? (
          <Steps.Step title={product.label} />
        ) : (
          <Steps.Step title={item} />
        );
      })}
    </Steps>
  );
};

export const AlphabeticSort = (number) => {
  let dict = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return dict[number];
};

export const SiteMainTitle = (props) => {
  const { title, sub_title } = props;
  return (
    <Row>
      <Col span={24} className="site_main_title">
        {title}
      </Col>
      {sub_title && (
        <Col span={24} className="site_sub_title">
          {sub_title}
        </Col>
      )}
    </Row>
  );
};

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
  } = props;

  let fa = <i className={props.icon} style={props.style}></i>;
  let svg = (
    <img
      alt="mallsett icon"
      src={src}
      className={src_class || "small_svg_icon"}
    />
  );
  let product_props = {};
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
          <i className={"far fa-question-circle"} style={props.style}></i>
        )}
      </Popover>
    </span>
  );

  let without_popover = (
    <span {...product_props} className={props.className || "margin-right-10"}>
      {props.title_position && props.title_position === "left" && props.title}{" "}
      {image_type}{" "}
      {(!props.title_position || props.title_position === "right") &&
        props.title}
    </span>
  );

  let output = popover ? with_popover : without_popover;
  output = link ? <Link to={link}>{output}</Link> : output;
  return output;
};

export function restrictFields(fields, restriction, config) {
  if (
    !restriction ||
    (restriction &&
      (!restriction.show_section.includes(config.dict_key) ||
        (!restriction.show && !restriction.hide)))
  ) {
    return fields;
  }

  let output = [];

  fields.forEach((field) => {
    let name = field.name;
    if (!name) {
      name = field.field.config && field.field.config.name;
    }
    if (name) {
      if (restriction.show && restriction.show.includes(name)) {
        output.push(field);
      } else if (restriction.hide && !restriction.hide.includes(name)) {
        output.push(field);
      }
    }
  });
  return output;
}
