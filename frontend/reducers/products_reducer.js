import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT_PAYLOAD,
  REMOVE_PRODUCT
} from "../actions/product_actions";

import merge from "lodash/merge";

const ProductsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return merge({}, action.products);
    case RECEIVE_PRODUCT_PAYLOAD:
      // return merge({}, oldState, { [action.product.id]: action.product });
      return merge({}, action.payload.products);
    case REMOVE_PRODUCT:
      let newState = merge({}, oldState);
      delete newState[action.productId];
      return newState;
    default:
      return oldState;
  }
};

export default ProductsReducer;
