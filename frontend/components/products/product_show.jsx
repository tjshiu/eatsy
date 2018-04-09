import React from "react";
import { Link } from 'react-router-dom';
import ProductShowSellerItems from './product_show_seller_items';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }


  render() {
    if (this.props.product && this.props.seller) {

      return (
        <div className="whole-product-show">
          <nav className='product-show-nav'>
            <div className="product-show seller">
              <img src={this.props.seller.imageUrl} />
              <h1>{this.props.seller.username}</h1>
            </div>
            <div>

              <Link className="productsLink" to='/products'>See All Food ></Link>
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
