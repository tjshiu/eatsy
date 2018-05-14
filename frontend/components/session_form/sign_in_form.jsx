import React from "react";
import { withRouter } from "react-router-dom";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((user) => {
      this.props.closeModal();
      if (this.props.match.path === "/" && this.props.match.isExact) {
        this.props.history.push("/products");
      }
    });
  }

  renderErrors() {
    return (
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.loginDemo().then((user) => {
      this.props.closeModal();
      if (this.props.match.path === "/" && this.props.match.isExact) {
        this.props.history.push("/products");
      }
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className='whole-form'>
        <nav className="form-nav">
          {this.props.otherForm}
          <button className="the-form-button">{this.props.formType}</button>
        </nav>
        <div className='demo-button-container'>
          <button className='demo-button' onClick={this.handleDemo}>Demo</button>
          <div className="or">OR</div>
        </div>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="errors-container">{this.renderErrors()}</div>
            <div className="login-form">
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
                <label>
                  Password:
                  <div>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input"
                      />
                  </div>
                </label>
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

export default withRouter(SignInForm);
