import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {

  return (
    <li className="product items">
      <ul>
        <li><Link to={`/products/${product.id}`}><img className='index productImg' src={product.imageUrl}/></Link></li>
        <li className='index productName'><Link to={`/products/${product.id}`} className="index productName">{product.productName}</Link></li>
        <li><Link className="index productSeller" to={`/users/${product.seller.id}`}>{product.seller.username}</Link></li>
        <li className='index productCost'>${(product.cost).toFixed(2)}</li>
      </ul>
    </li>);
};

export default ProductIndexItem;
