import websites from "./websites";
import posts from "./posts";
import scientists from "./scientists";
import users from "./users";

const dict = { users, websites, posts, scientists };

const GetLists = (dict_key) => {
  let output = dict[dict_key] || dict.posts;
  console.log("testing_get_lists");
  return output;
};

export default GetLists;
