
import { connect } from "react-redux";
import HomepageIndex from "./homepage_index";
import { fetchProducts } from "../../actions/product_actions";

const mapStateToProps = state => ({
  products: Object.keys(state.entities.products).map(id => state.entities.products[id])
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageIndex);
