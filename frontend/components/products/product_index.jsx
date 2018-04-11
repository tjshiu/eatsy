import React from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstLoad: true};
    //Partial fix for a new slice of state which is the loading.
  }

  componentDidMount() {
    this.props.fetchProducts().then(() => this.setState({firstLoad: false} ));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    if (this.state.firstLoad) {
      return null;
    }
    const products = this.props.products.map(product => {
      return (
        <ProductIndexItem key={`product-${product.id}`} product={product} />
      );
    });

    // <div className="index-side-search">Search Box</div>
    return (
      <div className="indexContainer">
        <ul className="index-product-list">{products}</ul>
      </div>
    );
  }
}

export default ProductIndex;
