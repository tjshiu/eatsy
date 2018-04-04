import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./fixed/nav_bar_container";
import Modal from "./modal/modal";
import Homepage from "./homepage/homepage";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Route path="/" component={Homepage} />
  </div>
);

export default App;
