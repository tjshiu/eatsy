import React from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.search(this.state.product_name)
    .then((products) => {
      this.setState({product_name: ""});
      this.props.history.push("/search");
    });
  }


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} className='search-form'>
        <input
          placeholder='Search for Food'
          type="text"
          value={this.state.product_name}
          onChange={this.update("product_name")}
          className="search-input"
        />
      <input
        className='search-submit'
        type="submit"
        value='Search'
        />
      </form>
    </div>
    );
  }
}

export default withRouter(SearchForm);
