import {
  RECEIVE_PRODUCT_ERRORS,
  RECEIVE_PRODUCT
} from "../actions/product_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return action.errors;
    case RECEIVE_PRODUCT:
      return [];
    default:
      return state;
  }
};
