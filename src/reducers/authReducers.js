/* eslint-disable default-case */
import * as type from "../const/ActionTypes";
const initialState = {
  isLoggedIn: false,
  token: "",
  message: "",
  loading: false,
  checkChangePass: false,
};

export default function authReducer(state = initialState, action = {}) {
    // console.log("ACTION: ", action);
    switch (action.type) {
      case type.LOGGIN:
        return {
          ...state,
          message: "",
          loading: true,
        };
      case type.LOGGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          loading: false,
          token: action.payload.token,
          username: action.payload.username,
          message: "Logged in success",
        };
      case type.LOGGIN_FAILED:
        return {
          ...state,
          isLoggedIn: false,
          loading: false,
          message: "Username or Password do not correct!",
        };
      case type.CHECK_CHANGE_PASS:
        return {
          ...state,
          checkChangePass: action.payload,
        };
    }
    return state;
}
