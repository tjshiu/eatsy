import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./nav_bar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
