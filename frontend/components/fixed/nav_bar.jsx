import React from "react";
import { Link } from "react-router-dom";

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
      <React.Fragment>
        <h2 className="header-name">Hi, {this.props.currentUser.username}!</h2>
        <button className="logout" onClick={this.props.logout}>
          Log Out
        </button>
      </React.Fragment>
    );
  }

  Greeting() {
    return this.props.currentUser
      ? this.personalGreeting()
      : this.sessionLinks();
  }

  render() {
    return (
      <div className='NavBar-Container'>
        <nav className="NavBar">
          <div className="NavBarLeft">
            <Link to="/" className="header-link">
              <h1 className="Logo">Eatsy</h1>
            </Link>
            <h3>Search</h3>
          </div>
          <div className="NavBarRight">
            <Link className='sell-link' to="/products/new" className='Register'>Sell on Eatsy</Link>
            {this.Greeting()}
            <div className='cart'>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <div className='cart-label'>Cart</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
