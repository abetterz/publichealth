import login from "../screens/admin/forms/login";
import register from "../screens/admin/forms/register";

const dict = {
  login: {
    title: "Sign In",
  },
  register: {
    title: "Register",
  },
  websites: {
    title: "Manage Website Links",
  },
  users: {
    title: "Manage Users",
  },
  posts: {
    title: "Manage Posts",
  },
  analytics: {
    title: "Analytics",
  },
  scientists: {
    title: "Manage Scientists",
  },
  dashboard: {
    title: "Dashboard",
  },
};

const GetNomenclature = (dict_key) => {
  console.log(dict_key);
  let output = dict[dict_key] || dict.login;
  return output;
};

export default GetNomenclature;
