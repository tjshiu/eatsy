import { connect } from "react-redux";
import ProductForm from "./product_form";
import { updateProduct, receiveErrors, fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.products,
  userId: state.session.currentUser.id,
  product: state.entities.products[ownProps.match.params.productId],
  formType: "Edit A Product",
});

const mapDispatchToProps = dispatch => ({
  action: product => dispatch(updateProduct(product)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
