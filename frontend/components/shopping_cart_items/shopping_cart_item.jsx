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
          <li className='image-shop-item' key={`product-detail-cart-item-${this.props.item.id}`}>
            <Link to={`/products/${product.id}`}><img src={product.imageUrl} /></Link>
          </li>
          <li className='product-detail-link-delete'>
            <Link className='product-detail-link' to={`/products/${product.id}`}>{product.productName}</Link>
            <button onClick={() => this.props.delete(this.props.item.id)}>Remove</button>
          </li>
          <li className='quantity-edit' key={`product-detail-quantity-cart-item-${this.props.item.id}`}>
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
              <input className='quantity-update' type="submit" value={"Update"} />
            </form>
          </li>
          <li className='item-cost-detail-container'>
            <ul className='item-cost-detail'>
              <li className='tot-price'>${this.props.item.totalCost.toFixed(2)}</li>
              <li className='ind-price'>(${this.props.item.price.toFixed(2)} each)</li>
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}

export default ShoppingCartItem;
