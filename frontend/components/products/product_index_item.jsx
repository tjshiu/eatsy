import React from 'react';
import { Link } from 'react-router-dom';


const PostIndexItem = ({ product }) => {
  return (
    <li>
      {product.productName}
    </li>);
};

export default PostIndexItem;
