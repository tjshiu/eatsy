import React from "react";
import { Link } from 'react-router-dom';

class NewShoppingCartItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let id = '';
    if (this.props.userId) {
      id = this.props.userId.id;
    }
    this.state = {
      quantity: 1,
      user_id: id,
      product_id: this.props.productId
    };
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

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props
      .addToCart(this.state).then(() =>
        this.props.history.push(`/`)
      );
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="errors-container">{this.renderErrors()}</div>
        <div>$ {this.props.itemCost.toFixed(2)}</div>
          <div>
            <label>
              Quantity:
              <input
                id="quantity"
                type="number"
                min="1"
                step="1"
                value={this.state.quantity}
                onChange={this.update("quantity")}
              />
            </label>
          </div>
        <input type="submit" value={'Add To Cart'} />
      </form>
    );
  }

}

export default NewShoppingCartItemForm;
