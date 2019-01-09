import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is_empty";
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      debugger;
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload)
        // email: action.payload.email
      };
    }
    default:
      return state;
  }
}
