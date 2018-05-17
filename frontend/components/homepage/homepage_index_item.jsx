import React from 'react';
import { Link } from 'react-router-dom';


const HomepageIndexItem = ({ product }) => {

  return (
    <li className="homepage items">
      <ul>
        <li><Link to={`/products/${product.id}`}><img className='homepage productImg' src={product.imageUrl}/></Link></li>
        <li className='home productName'><Link to={`/products/${product.id}`} className="home productName">{product.productName}</Link></li>
        <li><Link className="home productSeller" to={`/users/${product.seller.id}`}>{product.seller.username}</Link></li>
        <li className='home productCost'>${(product.cost).toFixed(2)}</li>
      </ul>
    </li>);
};

export default HomepageIndexItem;
