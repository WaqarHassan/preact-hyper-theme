import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, GET_ORDERS, SET_CURRENT_USER } from "./types";
export const getOrders = () => dispatch => {
  axios
    .get(
      "https://platform.swyftapp.ninja/admin_dashboard/api/v1/orders"
      //   "/admin_dashboard/api/v1/user/login",
    )
    .then(res => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      });
    });
};
// export const setCurrentUser = token => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: token
//   };
// };
