import websites from "./websites";
import posts from "./posts";
import scientists from "./scientists";
import users from "./users";
import analytics from "./analytics";
const dict = { users, websites, posts, scientists, analytics };

const GetLists = (dict_key) => {
  let output = dict[dict_key] || dict.posts;
  return output;
};

export default GetLists;
