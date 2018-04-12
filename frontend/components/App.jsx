import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ProtectedRoute, OwnerRoute } from "../util/route_util";
import NavBarContainer from "./fixed/nav_bar_container";
import Modal from "./modal/modal";
import Homepage from "./homepage/homepage";
import CreateProductContainer from "./products/create_product_form_container";
import ProductShowContainer from "./products/product_show_container";
import EditProductFormContainer from './products/update_product_form_container';
import ProductIndexContainer from './products/product_index_container';
import UserShowContainer from './users/user_show_container';
import ShoppingCartIndexAndEditContainer from './shopping_cart_items/shopping_cart_index_and_edit_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path='/shoppingcart' component={ShoppingCartIndexAndEditContainer} />
      <ProtectedRoute exact path="/products/new" component={CreateProductContainer} />
      <OwnerRoute path='/products/:productId/edit' component={EditProductFormContainer} />
      <Route path="/products/:productId" component={ProductShowContainer} />
      <Route path='/users/:userId' component={UserShowContainer} />
      <Route path="/products" component={ProductIndexContainer} />
      <Route path="/search" component={ProductIndexContainer} />
      <Route path="/" component={Homepage} />
      <Route component={Homepage} />
    </Switch>
  </div>
);

export default App;
