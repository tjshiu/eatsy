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
      <div className="sessionbuttons">
        <Link to="/signin" className='SignIn'>Sign In</Link>
        <Link to="/register" className="Register">Register</Link>
      </div>
    );
  }

  personalGreeting() {
    return (
      <hgroup className="header-group>">
        <h2 className="header-name">Hi, {this.props.currentUser.username}</h2>
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
        <div className="NavBarLeft">
          <h1 className="Logo">Eatsy</h1>
          <h3>Search</h3>
        </div>
        <div className="NavBarRight">
          <h3>Demo</h3>
          <h3>Sell on Eatsy</h3>
          {this.Greeting()}
          <h3>Cart</h3>
        </div>
      </nav>
    );
  }
}

export default NavBar;
