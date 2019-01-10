import { GET_ORDERS } from "../actions/types";
import isEmpty from "../validation/is_empty";
const initialState = {
  orders: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS: {
      return {
        ...state,
        orders: action.payload
      };
    }
    default:
      return state;
  }
}
