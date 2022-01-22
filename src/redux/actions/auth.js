import axios from "axios";
import querystring from "querystring";
import {
  CLEAR_ERRORS,
  FORGOT_PASSWORD_SUCCESS,
  LOGOUT_USER,
  PASSWORD_RESET,
  LOGIN_USER,
  EMAIL_VERIFIED,
  USER_LOADED,
  REGISTER_SUCCESS,
} from "./types";
// import setAlert from "./alert";

import { setAuthToken } from "../../utils/auth";
import { removeAlert, setAlert } from "./alert";

export const getGeoLocation = (navigator) => async (dispatch) => {
  let geolocation = await navigator.geolocation;
  if (geolocation) {
    await navigator.geolocation.getCurrentPosition(async function (position) {
      await dispatch({
        type: "user_location",
        payload: position.coords,
      });
      return position.coords;
    });
  } else {
    return null;
  }
};

export const loadUser = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`/api/auth/load_user`, config);

    if (res.data.user) {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      dispatch({
        type: "user",
        payload: res.data.user,
      });

      dispatch({
        type: "current_place",
        payload: res.data.current_place,
      });
      dispatch({
        type: "current_profile",
        payload: res.data.current_profile,
      });
    }
    removeAlert("load_user", dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;

    setAlert("load_user", dispatch, output);

    return err;
  }
};

export const verifyEmail = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(
      `/api/auth/verify/?token=${payload.token}`,
      config
    );

    dispatch({
      type: EMAIL_VERIFIED,
      payload: res.data,
    });
    dispatch(loadUser());

    dispatch({
      type: CLEAR_ERRORS,
    });
    removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};

// get options
export const initial_product =
  (value = "", limit = 200) =>
  async (dispatch) => {
    const default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const searched = querystring.encode({
      code: "utf-8",
      q: value,
      limit: limit || 200,
    });

    let searched_api = `/api/search/products/?${searched}`;
    let populates_api = `/api/search/populates/?${searched}`;

    try {
      const res = await axios.get(searched_api, default_config);
      dispatch({
        type: "searched_product",
        payload: res.data,
      });
      const res_populate = await axios.get(populates_api, default_config);

      dispatch({
        type: "searched_product",
        payload: res_populate.data,
      });
      // dispatch(setAlert(action == "edit" ? "Profile updated" : "Profile Created"))
      removeAlert("searched_product", dispatch);
      return res_populate;
    } catch (err) {
      let output = err.response && err.response.data;
      setAlert("searched_product", dispatch, output);

      return output;
    }
  };

export const remove_query =
  ({ token, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "search_query",
        payload: [{}],
      });
      removeAlert("search_query", dispatch);
    } catch (err) {
      let output = err.response && err.response.data;
      setAlert("search_query", dispatch, output);

      return output;
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export const login = (payload) => async (dispatch) => {
  console.log("reached login");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/login/", body, config);

    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });

    // await dispatch(loadUser(res.data.status));
    await dispatch(loadUser());

    dispatch({
      type: CLEAR_ERRORS,
    });
    removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);
    return output;
  }
};

export const forgot_password = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/forgot_password/", body, config);
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: res.data,
    });
    await dispatch(loadUser());

    dispatch({
      type: CLEAR_ERRORS,
    });
    removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};

export const password_reset = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/password_reset/", body, config);
    dispatch({
      type: PASSWORD_RESET,
      payload: res.data,
    });

    dispatch({
      type: "search_query",
      payload: [{}],
    });

    dispatch({
      type: CLEAR_ERRORS,
    });
    await dispatch(loadUser());

    removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};

export const register = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/register/", body, config);
    await dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    await await dispatch(loadUser());

    await dispatch({
      type: CLEAR_ERRORS,
    });
    await removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};

export const verification = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/verification/", body, config);
    await dispatch({
      type: "VERIFICATION_SUCCESS",
      payload: res.data,
    });

    await await dispatch(loadUser());

    await dispatch({
      type: CLEAR_ERRORS,
    });
    await removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};

export const recovery_check = (payload) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ ...payload.payload });

  try {
    const res = await axios.post("/api/auth/recovery_check/", body, config);
    await dispatch({
      type: "RECOVERY_CHECK_SUCCESS",
      payload: res.data,
    });

    await await dispatch(loadUser());

    await dispatch({
      type: CLEAR_ERRORS,
    });
    await removeAlert(payload.key, dispatch);

    return res;
  } catch (err) {
    let output = err.response && err.response.data;
    setAlert(payload.key, dispatch, output);

    return output;
  }
};
