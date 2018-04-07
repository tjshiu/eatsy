import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
  return (
    <li>
      <ul>
        <li><img src={product.imageUrl}/></li>
        <Link to={`/products/${product.id}`} className="index productname">{product.productName}</Link>
        <li className="index productseller">{product.seller.username}</li>
        <li className="index productrating">rating</li>
        <li className='index productcost'>{product.cost}</li>
      </ul>
    </li>);
};

export default ProductIndexItem;
