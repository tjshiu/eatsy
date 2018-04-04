import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.Greeting = this.Greeting.bind(this);
  }

  sessionLinks() {
    return (
      <div>
        <Link to="/signin">Sign In</Link>
        <br />
        <Link to="/register">Register</Link>
      </div>
    );
  }

  personalGreeting() {
    return (
      <hgroup className="header-group>">
        <h2 className="header-name">Hi, {this.props.currentUser}</h2>
        <button className="header-button" onClick={this.props.logout}>
          Log Out
        </button>
      </hgroup>
    );
  }

  Greeting() {
    return this.props.currentUser
      ? this.personalGreeting()
      : this.sessionLinks();
  }

  render() {
    return (
      <nav className="NavBar">
        <h1>Eatsy</h1>
        <h3>Search</h3>
        <h3>Demo</h3>
        <h3>Sell on Eatsy</h3>
        <div>{this.Greeting()}</div>
        <h3>Cart</h3>
      </nav>
    );
  }
}

export default NavBar;
