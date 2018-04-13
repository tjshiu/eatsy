import React from "react";
import { Link } from "react-router-dom";
import ProductShowSellerItems from "./product_show_seller_items";
import NewShoppingCartItemContainer from "../shopping_cart_items/new_shopping_cart_item_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillUnmount() {
  }

  render() {
    if (this.props.product && this.props.seller) {
      let otherProductsIds = Object.keys(this.props.products).filter(
        id => (Number(id) !== Number(this.props.match.params.productId))
      );
      let otherProductsToFilter = otherProductsIds.map(
        id => this.props.products[parseInt(id)]
      );

      let otherProducts = otherProductsToFilter.filter((object) => object.userId === this.props.seller.id);

      return (
        <div className="whole-product-show">
          <nav className="product-show-nav">
            <Link
              className="product-show seller"
              to={`/users/${this.props.product.userId}`}
            >
              <img src={this.props.seller.imageUrl} />
              <h1>{this.props.seller.username}</h1>
            </Link>
            <div className="product-show-nav-right-side">
              <ul className="products-seller-items-container">
                {otherProducts.slice(0, 4).map(product => (
                  <ProductShowSellerItems
                    key={`product-items-seller-${product.id}`}
                    product={product}
                  />
                ))}
              </ul>
              <Link className="products-show-nav-Link" to="/products">
                See All Food >
              </Link>
            </div>
          </nav>

          <div className="product-show-productDetail">
            <div className="product-show left-side">
              <img src={this.props.product.imageUrl} />
              <div className="product-show description">
                <h2>Description</h2>
                <div>{this.props.product.description}</div>
              </div>
            </div>

            <div className="product-show right-side">
              <h1>{this.props.product.productName}</h1>
              <div>
                <NewShoppingCartItemContainer
                  productId={this.props.product.id}
                  itemCost={this.props.product.cost}
                />
              </div>
              <div className="product-show overview">
                <h2>Overview</h2>
                <div>{this.props.product.overview}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductShow;
