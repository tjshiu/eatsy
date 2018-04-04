import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, receiveErrors } from "../../actions/session_actions";
import SignInForm from "./sign_in_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign In"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
