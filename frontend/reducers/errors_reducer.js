import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import productsErrorsReducer from './products_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  products: productsErrorsReducer
});

export default errorsReducer;
