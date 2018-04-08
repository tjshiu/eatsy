import React from 'react';
import { Link } from 'react-router-dom';


const HomepageIndexItem = ({ product }) => {

  return (
    <li className="homepage items">
      <ul>
        <li><img className='homepage productImg' src={product.imageUrl}/></li>
        <li className='index productName'><Link to={`/products/${product.id}`} className="index productName">{product.productName}</Link></li>
        <li className="index productSeller">{product.seller.username}</li>
        <li className="index productRating">Rating</li>
        <li className='index productCost'>${(product.cost).toFixed(2)}</li>
      </ul>
    </li>);
};

export default HomepageIndexItem;
