import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBarContainer from "./fixed/nav_bar_container";
import Modal from "./modal/modal";
import Homepage from "./homepage/homepage";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <Route path="/" component={Homepage} />
      <Route component={Homepage} />
    </Switch>
  </div>
);

export default App;
