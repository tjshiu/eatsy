import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchProducts, deleteProduct } from "../../actions/product_actions";
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    products: state.entities.products,
    currentUser: state.session.currentUser || {}
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchProducts: id => dispatch(fetchProducts(id)),
  deleteProduct: id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
