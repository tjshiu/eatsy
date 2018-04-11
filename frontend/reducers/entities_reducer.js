import { combineReducers } from "redux";
import products from "./products_reducer";
import users from "./users_reducer";
import shoppingCartItems from "./shopping_cart_items_reducer";

const entitiesReducer = combineReducers({
  products,
  users,
  shoppingCartItems
});

export default entitiesReducer;
