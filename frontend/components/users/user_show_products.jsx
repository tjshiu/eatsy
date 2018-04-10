import React from "react";
import { Link } from 'react-router-dom';

class UserShowProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.product) return null;
    return (
      <li className='user-product-items'>
        <ul>
          <li><Link to={`/products/${this.props.product.id}`}><img className='user-index productImg' src={this.props.product.imageUrl}/></Link></li>
          <li className='user-index productName'><Link to={`/products/${this.props.product.id}`} className="index productName">{this.props.product.productName}</Link></li>
          <li className="user-index productRating">Rating</li>
          <li className='user-index productCost'>${(this.props.product.cost).toFixed(2)}</li>

          {this.props.currentUserId !== this.props.userId ? null : (
            <React.Fragment >
              <li className='user-index-button-container'>
                <Link
                  className='product-update'
                  to={`/products/${this.props.product.id}/edit`}>
                  Edit Product
                </Link>
                <button className='product-delete'
                  onClick={() => this.props.deleteProduct(this.props.product.id)}>
                  &times;
                </button>
              </li>
            </React.Fragment>
          )}
        </ul>
      </li>
    );
  }
}

export default UserShowProducts;
