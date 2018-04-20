import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, receiveErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SignInForm from "./sign_in_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign In"
  };
};

const mapDispatchToProps = dispatch => {
  const demo = { username: "Demo User", password: "password" };
  return {
    processForm: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    otherForm: (
      <button className='other-button' onClick={() => dispatch(openModal("register"))}>Register</button>
    ),
    closeModal: () => dispatch(closeModal()),
    loginDemo: () => dispatch(signIn(demo))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
