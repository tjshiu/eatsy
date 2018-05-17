import React from 'react';
import HomePageIndexItem from './homepage_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: []};
  }


  componentDidMount() {
    this.props.fetchProducts().then(() =>
      this.setState({ products: this.shuffle(this.props.products.slice(0, 6))})
    );
  }

  shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  render() {
    const products = this.state.products.map(product => {
      return (
        <HomePageIndexItem
          key={`home-product-${product.id}`}
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
