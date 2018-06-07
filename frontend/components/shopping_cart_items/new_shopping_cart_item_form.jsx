import React from "react";
import { Link } from "react-router-dom";

class NewShoppingCartItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let id;
    if (this.props.user) {
      id = this.props.user.id;
    } else {
      id = null;
    }
    this.state = {
      quantity: 1,
      user_id: id,
      product_id: this.props.productId
    };
  }

  componentDidMount() {
    this.props.fetchShoppingCartItems();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.productId !== nextProps.match.params.productId
    ) {
      this.props.clearErrors();
      this.setState({ product_id: nextProps.match.params.productId, quantity: 1});
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
    console.log(this.state);
    if (this.props.itemInCart) {
      let newState = Object.assign({}, this.state);
      newState.quantity =
        Number(this.state.quantity) + Number(this.props.itemInCart.quantity);
      newState.id = this.props.itemInCart.id;

      this.props
        .updateCart(newState)
        .then(() => this.props.history.push(`/shoppingcart`));
    } else {
      this.props
        .addToCart(this.state)
        .then(() => this.props.history.push(`/shoppingcart`));
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="create-new-shopping-cart-item-form"
        >
          <div className="product-cost-shop-item-form">
            $ {this.props.itemCost.toFixed(2)}
          </div>
          <div>
            <label className="quantity-new-shopping-cart-item">
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
          <input
            id="create-new-item-submit"
            type="submit"
            value={"Add To Cart"}
          />
          <div className="shopping-errors">{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default NewShoppingCartItemForm;
