const dict = {
  default: {
    label: "Next",
    block: false,
  },
  add_new: {
    label: "Add New",
    block: false,
    className: "add_new_btn",
  },
};

const getButtonProps = (config = {}) => {
  let { page_key } = config;

  let add_new = [
    "business_hours",
    "packages",
    "commitees",
    "events",
    "jobs",
    "employees",
    "business_members",
  ];
  if (add_new.includes(page_key)) {
    page_key = "add_new";
  }

  let output = dict[page_key] || dict.default;
  return output;
};

export default getButtonProps;
