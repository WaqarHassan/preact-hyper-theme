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
      debugger;
      const { token } = res.data.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      //   const decoded = jwt_decode(token);
      dispatch(setCurrentUser(token));
    })
    .catch(err => {
      debugger;
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const setCurrentUser = token => {
  return {
    type: SET_CURRENT_USER,
    payload: token
  };
};
