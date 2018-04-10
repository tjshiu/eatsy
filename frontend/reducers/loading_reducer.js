import {RECEIVE_ALL_PRODUCTS} from '../actions/product_actions';
import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions.js';
import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

export default function loadingReducer(state = true, action) {
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return false;
    case RECEIVE_CURRENT_USER:
      return false;
    case OPEN_MODAL:
      return false;
    case CLOSE_MODAL:
      return false;
    case RECEIVE_SESSION_ERRORS:
      return false;
    default:
      return true;
  }
}
