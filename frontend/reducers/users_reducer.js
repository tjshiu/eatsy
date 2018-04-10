import {
  RECEIVE_PRODUCT_PAYLOAD
} from "../actions/product_actions";

import { RECEIVE_USER } from '../actions/user_actions';

import merge from "lodash/merge";

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_PRODUCT_PAYLOAD:
      // return merge({}, oldState, { [action.product.id]: action.product });
      let newState = merge({}, oldState, action.payload.seller);
      return newState;
    default:
      return oldState;
  }
};

export default UserReducer;
