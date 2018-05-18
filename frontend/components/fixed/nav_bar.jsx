import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./search_form";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.Greeting = this.Greeting.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
  }

  sessionLinks() {
    return (
      <React.Fragment>
        <Link className="sell-link" to="/products/new" className="Register">
          Sell on Eatsy
        </Link>
        <button
          className="Register"
          onClick={() => this.props.openModal("register")}
        >
          Register
        </button>
        <button
          className="SignIn"
          onClick={() => this.props.openModal("signin")}
        >
          Sign In
        </button>
        <button className="SignIn" onClick={() => this.props.loginDemo()}>
          Demo
        </button>
      </React.Fragment>
    );
  }

  personalGreeting() {
    return (
      <div className='right-with-buttons'>
        <Link className="sell-link" to="/products/new" className="Register">
          Sell on Eatsy
        </Link>
        <Link
          to={`/users/${this.props.currentUser.id}`}
          className="header-name"
        >
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <div className='nav-user-show-label'>You</div>
        </Link>
        <button className="logout" onClick={this.props.logout}>
          <i className="fa fa-sign-out-alt" aria-hidden="true"></i>
          <div className='nav-button-logout-label'>Log out</div>
        </button>
      </div>
    );
  }

  Greeting() {
    return this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
  }

  render() {
    return (
      <div className="NavBar-Container">
        <nav className="NavBar">
          <div className="NavBarLeft">
            <Link to="/" className="header-link">
              <h1 className="Logo">Eatsy</h1>
            </Link>
            <SearchForm search={this.props.searchProducts} />
          </div>
          <div className="NavBarRight">
            {this.Greeting()}
            <Link to="/shoppingcart" className="cart">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
              <div className="cart-label">Cart</div>
            </Link>
            <div></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
