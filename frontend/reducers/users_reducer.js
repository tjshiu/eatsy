import { RECEIVE_PRODUCT_PAYLOAD } from "../actions/product_actions";
import {
  RECEIVE_SHOPPING_CART_ITEM_PAYLOAD,
  RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD
} from "../actions/shopping_cart_actions";

import { RECEIVE_USER } from "../actions/user_actions";

import merge from "lodash/merge";

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, { [action.user.id]: action.user });
    case RECEIVE_PRODUCT_PAYLOAD:
      // return merge({}, oldState, { [action.product.id]: action.product });
      let newState = merge({}, action.payload.seller);
      return newState;
    case RECEIVE_SHOPPING_CART_ITEM_PAYLOAD:
      return merge({}, oldState, action.payload.users);
    case RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD:
      newState = merge({}, oldState);
      if (action.payload.users) {
        newState[Object.keys(action.payload.users)[0]] = Object.values(action.payload.users)[0];
      }
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
