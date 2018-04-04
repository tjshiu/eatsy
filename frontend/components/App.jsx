import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./fixed/nav_bar_container";
import RegisterFormContainer from "./session_form/register_form_container";
import SignInFormContainer from "./session_form/sign_in_form_container";

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/register" component={RegisterFormContainer} />
  </div>
);

export default App;
