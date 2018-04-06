import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import ui from "./ui_reducer";
import entities from "./entities_reducer";

const rootReducer = combineReducers({
  entities,
  ui,
  errors,
  session
});

export default rootReducer;
