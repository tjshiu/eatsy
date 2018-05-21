import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {
  fetchShoppingCartItems,
  fetchShoppingCartItem,
  createShoppingCartItem,
  updateShoppingCartItem,
  deleteShoppingCartItem,
  deleteShoppingCartItems
} from "./actions/shopping_cart_actions";
import { deleteProduct, searchProducts, categoryProducts } from "./actions/product_actions";
import { fetchUser } from "./actions/user_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchShoppingCartItems = fetchShoppingCartItems;
  window.fetchShoppingCartItem = fetchShoppingCartItem;
  window.createShoppingCartItem = createShoppingCartItem;
  window.updateShoppingCartItem = updateShoppingCartItem;
  window.deleteShoppingCartItem = deleteShoppingCartItem;
  window.deleteProduct = deleteProduct;
  window.deleteShoppingCartItems = deleteShoppingCartItems;
  window.categoryProducts = categoryProducts;
  window.fetchUser = fetchUser;
  window.searchProducts = searchProducts;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
