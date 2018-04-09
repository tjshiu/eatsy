import React from "react";
import { Link } from 'react-router-dom';

const MustBeSignedIn = () => (
  <div className='whole-errors'>
    <div className='error-container'>
      <img src='http://res.cloudinary.com/dwanjkcku/image/upload/v1523240984/sad_orange.png' />
      <div className='error-message'>Sorry! You must be signed in to view this page!</div>
    </div>
  </div>
);

export default MustBeSignedIn;
