import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = {};

export default function Alert(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return { [action.key]: action.payload };
    case REMOVE_ALERT:
      delete state[action.key];
      return state;
    default:
      return state;
  }
}
