import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import errorsReducer from "../reducers/errorsReducer";
import ordersReducer from "../reducers/ordersReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  ordersData: ordersReducer
});
