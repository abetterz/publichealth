import { combineReducers } from "redux";
import auth from "./auth";
import master from "./master";

export default combineReducers({
  master,
  auth,
});
