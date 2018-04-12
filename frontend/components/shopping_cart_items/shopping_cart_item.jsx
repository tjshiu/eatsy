import React from "react";
import { Link } from "react-router-dom";

class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.item.id,
      quantity: this.props.item.quantity,
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

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.update(this.state);
  }

  render() {
    let product = this.props.products[this.props.item.productId];

    return (
      <li>
        <ul className='shopping-cart-item'>
          <li key={`product-detail-cart-item-${this.props.item.id}`}>
            <img src={product.imageUrl} />
          </li>
          <li>
            <Link to={`/products/${product.id}`}>{product.productName}</Link>
            <button onClick={() => this.props.delete(this.props.item.id)}>Remove</button>
          </li>
          <li key={`product-detail-quantity-cart-item-${this.props.item.id}`}>
            <form onSubmit={this.handleSubmit}>
              <label onSubmit={this.handleSubmit}>
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
              <input type="submit" value={"Update"} />
            </form>
          </li>
          <li>
            <ul>
              <li>${this.props.item.totalCost}</li>
              <li>(${this.props.item.price} each)</li>
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}

export default ShoppingCartItem;
