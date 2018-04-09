import React from "react";
import { Link } from 'react-router-dom';

class ProductShowSellerItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/products/${this.props.product.id}`}><img src={this.props.product.imageUrl} /></Link>
      </li>
    );
  }
}

export default ProductShowSellerItems;
