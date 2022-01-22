import login from "../screens/admin/forms/login";
import register from "../screens/admin/forms/register";
import websites from "../screens/admin/forms/websites";
import posts from "../screens/admin/forms/websites";
import scientists from "../screens/admin/forms/websites";
import users from "../screens/admin/forms/websites";

const dict = { login, register, users, websites, posts, scientists };

const GetAuth = (dict_key) => {
  let output = dict[dict_key] || dict.login;
  return output;
};

export default GetAuth;
