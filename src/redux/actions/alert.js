import { REMOVE_ALERT } from "../actions/types";

export const setAlert = (key, dispatch, payload) => {
  dispatch &&
    dispatch({
      type: "error_" + key,
      key,
      payload,
    });
};

export const removeAlert = (key) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    key,
  });
};

export const distpatchRemoveAlert = (key, payload) => (dispatch) => {
  dispatch({
    key,
    type: REMOVE_ALERT,
    payload,
  });
};
