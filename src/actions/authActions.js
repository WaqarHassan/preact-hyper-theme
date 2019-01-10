import axios from "axios";
// import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
export const loginUser = payload => dispatch => {
  console.log(payload);
  axios
    .post(
      "https://platform.swyftapp.ninja/admin_dashboard/api/v1/user/login",
      //   "/admin_dashboard/api/v1/user/login",
      payload
    )
    .then(res => {
      const { token } = res.data.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      //   const decoded = jwt_decode(token);
      dispatch(setCurrentUser(token));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};
export const logoutUser = () => dispatch => {
  // Remove token form local storage
  localStorage.removeItem("jwtToken");
  // remove auth header sfor future requests
  setAuthToken(false);
  // set current user to { } which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
export const setCurrentUser = token => {
  return {
    type: SET_CURRENT_USER,
    payload: token
  };
};
