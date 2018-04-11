import React from "react";
import { Link } from 'react-router-dom';
import merge from "lodash/merge";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.id = '';
    if (this.props.userId) {
      this.id = this.props.userId.id;
    }

  }

  componentDidMount() {
    this.props.fetchItems();
  }




  render() {
    if (!this.props.items) return null;


    let newProductarray = [];
    for(let i = 0; i < this.props.products.length; i++) {
      let prodId = this.props.products[i].id;
    }


    return(
      <div>
        hello
      </div>
    );
  }

}

export default ShoppingCart;
