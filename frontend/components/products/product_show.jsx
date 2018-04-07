import React from "react";

class ProductShow extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render(){
    return(
      <div>
        hello
      </div>
    );
  }
}

export default ProductShow;
