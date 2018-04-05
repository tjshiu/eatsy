import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, receiveErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
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
    clearErrors: () => dispatch(receiveErrors([])),
    otherForm: (
      <button className='other-button' onClick={() => dispatch(openModal("register"))}>Register</button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
