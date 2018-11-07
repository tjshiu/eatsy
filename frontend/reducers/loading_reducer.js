import {RECEIVE_ALL_PRODUCTS} from '../actions/product_actions';
import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions.js';
import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

export default function loadingReducer(state = false, action) {
  switch (action.type) {
    default:
      return state;
  }
}
