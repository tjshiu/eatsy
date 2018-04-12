import {
  RECEIVE_SHOPPING_CART_ITEM_PAYLOAD,
  RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD,
  REMOVE_SHOPPING_CART_ITEM,
  REMOVE_SHOPPING_CART_ITEMS
} from "../actions/shopping_cart_actions";
import {
REMOVE_PRODUCT
} from "../actions/product_actions";

import merge from "lodash/merge";

const ShoppingCartItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case REMOVE_SHOPPING_CART_ITEM:
      let newState = merge({}, oldState);
      delete newState[action.shoppingCartItemId];
      return newState;
    case RECEIVE_SHOPPING_CART_ITEM_PAYLOAD:
      return merge({}, oldState, action.payload.shoppingCartItems);
    case RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD:
      return merge({}, oldState, action.payload.shoppingCartItems);
    case REMOVE_SHOPPING_CART_ITEMS:
      return action.emptyCart;
    case REMOVE_PRODUCT:
      newState = merge({}, oldState);
      let matchingShoppingCartItem = Object.values(newState).filter(object => object.productId === action.productId);
      let deleteId = matchingShoppingCartItem[0].id;
      delete newState[deleteId];
      return newState;
    default:
      return oldState;
  }
};

export default ShoppingCartItemsReducer;
