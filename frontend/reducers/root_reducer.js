import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import ui from "./ui_reducer";

const rootReducer = combineReducers({
  errors,
  session,
  ui
});

export default rootReducer;
