import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { register, receiveErrors, signIn } from "../../actions/session_actions";
import RegisterForm from "./register_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Register"
  };
};

const mapDispatchToProps = dispatch => {
  const demo = { username: "Demo User", password: "password" };
  return {
    processForm: user => dispatch(register(user)),
    clearErrors: () => dispatch(receiveErrors([])),
    otherForm: (
      <button className='other-button' onClick={() => dispatch(openModal("signin"))}>Sign In</button>
    ),
    closeModal: () => dispatch(closeModal()),
    loginDemo: () => dispatch(signIn(demo))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
