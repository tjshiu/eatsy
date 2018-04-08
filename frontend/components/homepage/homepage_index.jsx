import React from 'react';
import HomePageIndexItem from './homepage_index_item';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products.map(product => {
      return (
        <HomePageIndexItem
          key={`product-${product.id}`}
          product={product}
        />
      );
    });

    return (
      <div className="HomepageContainer">
        <ul className='home-product-list'>
          {products}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
