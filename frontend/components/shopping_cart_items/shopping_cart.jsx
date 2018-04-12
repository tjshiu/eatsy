import React from "react";
import { Link } from "react-router-dom";
import merge from "lodash/merge";
import ShoppingCartItem from "./shopping_cart_item";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.id = "";
    if (this.props.userId) {
      this.id = this.props.userId.id;
    }
    // this.state = {itemNum : this.props.items.length};
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchItems().then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) return null;

    let totalSum = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      totalSum += this.props.items[i].totalCost;
    }

    return (
      <div className='whole-shopping-cart-container'>
        <h1>Shopping Cart</h1>
          <nav>
            {this.props.items.length === 1 ? (
              <div>{this.props.items.length} item</div>
            ) : (
              <div>{this.props.items.length} items</div>
            )}
            <Link className='keepShopping' to="/products">Keep Shopping ></Link>
          </nav>

          <div className='whole-shopping-cart'>
          {this.props.items.length === 0 ? (
            <div>No Items in your Cart</div>
          ) : (
            <div>
              <ul>
                {this.props.items.map(item => (
                  <ShoppingCartItem
                    key={`shopping-cart-item-${item.id}`}
                    delete={this.props.removeProduct}
                    item={item}
                    update={this.props.update}
                    products={this.props.products}
                  />
                ))}
              </ul>
            </div>
          )}

          <div className="checkout-container">
            <div>Item(s) total: {totalSum.toFixed(2)}</div>
            <button
              onClick={() =>
                this.props.checkout(this.props.user.shoppingCartItemsIds)
              }>
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
