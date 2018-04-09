import {RECEIVE_ALL_PRODUCTS} from '../actions/product_actions';

export default function loadingReducer(state = true, action) {
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return false;
    default:
      return true;
  }
}
