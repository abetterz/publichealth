import login from "../screens/admin/forms/login";
import register from "../screens/admin/forms/register";

const dict = {
  login: {
    title: "Sign In",
  },
  register: {
    title: "Register",
  },
};

const GetNomenclature = (dict_key) => {
  let output = dict[dict_key] || dict.login;
  return output;
};

export default GetNomenclature;
