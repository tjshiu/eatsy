import { connect } from "react-redux";
import NewShoppingCartItemForm from "./new_shopping_cart_item_form";
import { receiveShoppingCartItemErrors, createShoppingCartItem } from "../../actions/shopping_cart_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.shoppingCartItems,
  userId: state.session.currentUser,
  // isInCart: isInCart(state),
  itemCost: ownProps.itemCost,
  productId: ownProps.productId
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveShoppingCartItemErrors([])),
  addToCart: (product) => dispatch(createShoppingCartItem(product))
  // addToCart: (product) => dispatch(createShoppingCartItem(product))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewShoppingCartItemForm));
