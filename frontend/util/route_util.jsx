import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { openModal } from "../actions/modal_actions";
import MustBeSignedIn from "../components/errors/must_be_signed_in";
import MustBeOwner from '../components/errors/must_be_owner';

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

const ProtectedToOwner = ({ component: Component, path, loggedIn, isOwner, exact, redirectToModal }) => (
  <Route
    path={path}
    exact={exact}
    render={props => {
      if (loggedIn && isOwner) {
        return <Component {...props} />;
      } else {
        return <MustBeOwner />;
      }
    }}
    />
);
const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const isOwner = (state, productId) => {
  if (!state.session.currentUser) return false;

  return state.session.currentUser.productIds.includes(productId);
};

const mapStateToPropsOwner = (state, ownProps) => {
  // let owner = false;
  // if (state.session.currentUser) {
  //   owner = false;
  // } else {
  //   owner = state.session.currentUser.productIds.includes(+ ownProps.match.params.productId);
  // }

  return {
  loggedIn: Boolean(state.session.currentUser),
  isOwner: isOwner(state, +ownProps.match.params.productId)
};};

const mapDispatchToProps = dispatch => ({
  redirectToModal: () => dispatch(openModal("signin"))
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));

export const OwnerRoute = withRouter(connect(mapStateToPropsOwner)(ProtectedToOwner));
