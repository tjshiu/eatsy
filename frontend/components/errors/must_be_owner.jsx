import React from "react";
import { Link } from 'react-router-dom';

const MustBeOwner = () => (
  <div className='whole-errors'>
    <div className='error-container'>
      <img src='https://res.cloudinary.com/dwanjkcku/image/upload/v1523240984/sad_orange.png' />
      <div className='error-message'>Sorry! You must be the Creator!</div>
    </div>
  </div>
);

export default MustBeOwner;
