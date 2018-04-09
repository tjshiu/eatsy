import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { openModal } from "../actions/modal_actions";
import MustBeSignedIn from "../components/errors/must_be_signed_in";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact, redirectToModal }) => (
  <Route
    path={path}
    exact={exact}
    render={props => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        redirectToModal();
        return <MustBeSignedIn />;
      }
    }}
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  redirectToModal: () => dispatch(openModal("signin"))
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
