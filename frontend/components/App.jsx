import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./fixed/nav_bar_container";
import Modal from "./modal/modal";
import Homepage from "./homepage/homepage";
import CreateProductContainer from "./products/create_product_form_container";
import ProductShowContainer from "./products/product_show_container";
import ProductIndexContainer from './products/product_index_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/products/new" component={CreateProductContainer} />
      <Route path="/products/:productId" component={ProductShowContainer} />
      <Route path="/products" component={ProductIndexContainer} />
      <Route path="/" component={Homepage} />
      <Route component={Homepage} />
    </Switch>
  </div>
);

export default App;
