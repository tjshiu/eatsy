import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstLoad: true };
    //Partial fix for a new slice of state which is the loading.
  }

  componentDidMount() {
    this.props.checkmypath().then(() => this.setState({ firstLoad: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      this.props.checkmypath().then(() => this.setState({ firstLoad: false }));
    }
  }

  render() {
    if (this.state.firstLoad) {
      return null;
    }
    let products = this.props.products.map(product => {
      return (
        <ProductIndexItem
          key={`product-${product.id}`}
          product={product} />
      );
    });

    if (products.length === 0) {
      products = (
        <div className="search-no-matches">
          <img src="https://res.cloudinary.com/dwanjkcku/image/upload/v1523240984/sad_orange.png" />
          <div>Sorry! No Matches!</div>
        </div>
      );
    }

    return (
      <div className="indexContainer">
        <ul className="index-product-list">{products}</ul>
      </div>
    );
  }
}

export default ProductIndex;
