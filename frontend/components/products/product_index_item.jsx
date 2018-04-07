import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({ product }) => {
  return (
    <li>
      <ul>
        <li><img src={product.imageUrl}/></li>
        <li className="index productname">{product.productName}</li>
        <li className="index productseller">{product.seller.username}</li>
        <li className="index productrating">rating</li>
        <li className='index productcost'>{product.cost}</li>
      </ul>
    </li>);
};

export default ProductIndexItem;
