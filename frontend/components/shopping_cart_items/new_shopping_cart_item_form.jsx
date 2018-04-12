import React from "react";
import { Link } from "react-router-dom";

class NewShoppingCartItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let id;
    if (this.props.user) {
      id = this.props.user.id;
    }
    this.state = {
      quantity: 1,
      user_id: id,
      product_id: this.props.productId,
    };
  }

  componentDidMount() {
    this.props.fetchShoppingCartItems();
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


    console.log(this.props);
    debugger;
    if (this.props.itemInCart) {
      let newState = Object.assign({}, this.state);
      newState.quantity = (Number(this.state.quantity) + Number(this.props.itemInCart.quantity));
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
        <input type="submit" value={"Add To Cart"} />
      </form>
    );
  }
}

export default NewShoppingCartItemForm;
