import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./fixed/nav_bar_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
