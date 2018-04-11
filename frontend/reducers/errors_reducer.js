import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import productsErrorsReducer from './products_errors_reducer';
import shoppingCartItemsErrorsReducer from './shopping_cart_items_errors';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  products: productsErrorsReducer,
  shoppingCartItems: shoppingCartItemsErrorsReducer
});

export default errorsReducer;
