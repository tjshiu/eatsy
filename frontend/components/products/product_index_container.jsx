import { connect } from "react-redux";
import ProductIndex from "./product_index";
import { fetchProducts, categoryProducts } from "../../actions/product_actions";

const mapStateToProps = state => ({
  products: Object.keys(state.entities.products).map(
    id => state.entities.products[id]
  ),
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const checkpath = () => {
    if (ownProps.match.path === "/products") {
      return dispatch(fetchProducts());
    } else if (ownProps.match.path === "/category/:type") {
      return dispatch(categoryProducts(ownProps.match.params.type));
    } else {
      return new Promise(resolve => resolve());
    }
  };
  return {
    checkmypath: () => checkpath()
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
