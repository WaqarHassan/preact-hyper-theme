import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is_empty";
const initialState = {
  isAuthenticated: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload)
      };
    default:
      return state;
  }
}
