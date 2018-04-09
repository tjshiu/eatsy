import { combineReducers } from "redux";
import products from "./products_reducer";
import users from './users_reducer';

const entitiesReducer = combineReducers({
  products,
  users
});

export default entitiesReducer;
