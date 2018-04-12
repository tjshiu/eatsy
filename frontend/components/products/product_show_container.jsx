import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => {
  let product = state.entities.products[ownProps.match.params.productId];
  let seller;
  if (product) seller = state.entities.users[product.userId];
  return {
    product: product,
    seller: seller,
    products: state.entities.products
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
