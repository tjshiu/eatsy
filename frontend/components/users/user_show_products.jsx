import React from "react";
import { Link } from 'react-router-dom';

class UserShowProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.product) return null;
    return (
      <li className='product items'>
        <ul>
          <li><Link to={`/products/${this.props.product.id}`}><img className='index productImg' src={this.props.product.imageUrl}/></Link></li>
          <li className='index productName'><Link to={`/products/${this.props.product.id}`} className="index productName">{this.props.product.productName}</Link></li>
          <li className="index productRating">Rating</li>
          <li className='index productCost'>${(this.props.product.cost).toFixed(2)}</li>

          {this.props.currentUserId !== this.props.userId ? null : (
            <React.Fragment>
              <li><button onClick={() => this.props.deleteProduct(this.props.product.id)}>Delete Product</button></li>
              <li><Link to={`/products/${this.props.product.id}/edit`}>Edit Product</Link></li>
            </React.Fragment>
          )}
        </ul>
      </li>
    );
  }
}

export default UserShowProducts;
