import * as Simple from "./simple_fields";
import * as Dynamic from "./dynamic_fields";

let dict = {
  ...Simple,
  ...Dynamic,
};

const GetFormField = (dict_key, config = {}) => {
  const { callback } = config;
  let output = dict[dict_key] || dict.SimpleInput;
  if (callback) {
    return callback({ output, dict_key });
  }
  return output;
};
export default GetFormField;
