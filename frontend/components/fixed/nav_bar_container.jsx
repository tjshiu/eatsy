import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./nav_bar";
import { logout, signIn } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import {searchProducts, categoryProducts} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  const demo = { username: "Demo User", password: "password" };
  return {
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    loginDemo: () => dispatch(signIn(demo)),
    searchProducts: (search) => dispatch(searchProducts(search)),
    categoryProducts: (type) => dispatch(categoryProducts(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
