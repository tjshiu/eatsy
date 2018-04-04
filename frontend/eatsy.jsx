import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signIn, register, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signIn = signIn;
  window.logout = logout;
  window.register = register;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Eatsy</h1>, root);
});
