import {
  REGISTER_FAIL,
  USER_LOADED,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGOUT_USER,
  EMAIL_VERIFIED,
  EMAIL_VERIFIED_FAILED,
} from "../actions/types";

const initialState = {
  token: null,
  isAuthenticated: false,
  current_profile: null,
  current_place: null,
  loading: true,
  user: null,
  errors: {},
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "user_location":
      return {
        ...state,
        [type]: payload,
      };

    case LOGIN_USER:
    case FORGOT_PASSWORD_SUCCESS:
    case EMAIL_VERIFIED:
      if (payload.token) {
        localStorage.setItem("token", payload.token);
      }

      return {
        ...state,
        ...payload,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case EMAIL_VERIFIED_FAILED:
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...initialState,
        errors: action,
      };
    default:
      return state;
  }
}
