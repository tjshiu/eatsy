import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.loading) return null;
    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={`product-${product.id}`}
          product={product}
        />
      );
    });

    return (
      <div className="indexContainer">
        <div className='index-side-search'>Search Box</div>
        <ul className='index-product-list'>
          {products}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
