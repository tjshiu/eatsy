import { connect } from "react-redux";
import NewShoppingCartItemForm from "./new_shopping_cart_item_form";
import {
  receiveShoppingCartItemErrors,
  createShoppingCartItem,
  updateShoppingCartItem,
  fetchShoppingCartItems
} from "../../actions/shopping_cart_actions";
import { withRouter } from "react-router-dom";
import { itemInCart } from "../../reducers/selector";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.shoppingCartItems,
  user: state.session.currentUser,
  itemInCart: itemInCart(state, ownProps.productId),
  itemCost: ownProps.itemCost,
  productId: ownProps.productId
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveShoppingCartItemErrors([])),
  addToCart: product => dispatch(createShoppingCartItem(product)),
  updateCart: product => dispatch(updateShoppingCartItem(product)),
  fetchShoppingCartItems: () => dispatch(fetchShoppingCartItems())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewShoppingCartItemForm)
);
