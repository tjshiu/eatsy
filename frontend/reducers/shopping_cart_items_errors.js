import {
  RECEIVE_SHOPPING_CART_ERRORS,
  RECEIVE_SHOPPING_CART_ITEM_PAYLOAD
} from "../actions/shopping_cart_actions";
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOPPING_CART_ERRORS:
      return action.errors;
    case RECEIVE_SHOPPING_CART_ITEM_PAYLOAD:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
