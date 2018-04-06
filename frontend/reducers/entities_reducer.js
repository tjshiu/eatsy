import { combineReducers } from "redux";
import products from "./products_reducer";

const entitiesReducer = combineReducers({
  products
});

export default entitiesReducer;
