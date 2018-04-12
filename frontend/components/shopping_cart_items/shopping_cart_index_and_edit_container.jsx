import { connect } from "react-redux";
import ShoppingCart from "./shopping_cart";
import {
  receiveShoppingCartItemErrors,
  fetchShoppingCartItems,
  updateShoppingCartItem,
  deleteShoppingCartItem,
  deleteShoppingCartItems
} from "../../actions/shopping_cart_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.shoppingCartItems,
  user: state.session.currentUser,
  items: Object.keys(state.entities.shoppingCartItems).map(
    id => state.entities.shoppingCartItems[id]
  ),
  products: state.entities.products
});

const mapDispatchToProps = dispatch => ({
  fetchItems: userId => dispatch(fetchShoppingCartItems(userId)),
  clearErrors: () => dispatch(receiveShoppingCartItemErrors([])),
  checkout: array => dispatch(deleteShoppingCartItems(array)),
  update: product => dispatch(updateShoppingCartItem(product)),
  removeProduct: id => dispatch(deleteShoppingCartItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
