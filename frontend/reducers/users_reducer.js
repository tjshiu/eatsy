import {
  RECEIVE_PRODUCT_PAYLOAD
} from "../actions/product_actions";

import merge from "lodash/merge";

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PRODUCT_PAYLOAD:
      // return merge({}, oldState, { [action.product.id]: action.product });
      return merge({}, action.payload.seller);
    default:
      return oldState;
  }
};

export default UserReducer;
