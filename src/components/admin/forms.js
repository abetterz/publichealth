import login from "../screens/admin/forms/login";
import register from "../screens/admin/forms/register";
import websites from "../screens/admin/forms/websites";
import posts from "../screens/admin/forms/posts";
import scientists from "../screens/admin/forms/scientists";
import users from "../screens/admin/forms/users";

const dict = { login, register, users, websites, posts, scientists };

const GetForm = (dict_key) => {
  let output = dict[dict_key] || dict.login;
  return output;
};

export default GetForm;
