import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  componentWillMount() {
    debugger;
    this.firstLoad = true;
    //Partial fix for a new slice of state which is the loading. 
  }

  componentDidMount() {
    debugger;
    this.props.fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(nextProps);
  }

  render() {
    debugger;
    if (this.firstLoad) {
      this.firstLoad = false;
      return null;
    }
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
