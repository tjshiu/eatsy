import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { register, receiveErrors } from "../../actions/session_actions";
import RegisterForm from "./register_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Register",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(register(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
