import React from "react";
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className='whole-form'>
        <nav className="form-nav">
          <button className="the-form-button">{this.props.formType}</button>
          {this.props.otherForm}
        </nav>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br />
            <div>{this.renderErrors()}</div>
            <div className="login-form">
              <br />
              <label>
                Username:
                <div>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    className="login-input"
                    />
                </div>
              </label>
              <br />
              <label>Email
                <div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                    />
                </div>
              </label>
              <br />
              <label>
                Password
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    />
                </div>
              </label>
              <br />
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
