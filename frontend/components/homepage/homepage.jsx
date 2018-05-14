import React from "react";
import Slideshow from "../slideshow/slideshow";
import HomePageIndexContainer from './homepage_container';
import { Link } from 'react-router-dom';

const homepage = () => (
  <div>
    <Slideshow />
    <div className="homepage-selling-container">
      <div className="homepage-selling-item">
        <div className="homepage-title">
          <i className="fa fa-check" aria-hidden="true"> </i>
            Unique Food
        </div>
        <div>We have many varieties of food that you can choose among.</div>
      </div>
      <div className="homepage-selling-item">
        <div className="homepage-title">
          <i className="fa fa-check" aria-hidden="true"> </i>
            Independent Sellers
        </div>
        <div>Buy food that is handcrafted from people who put their soul into the food.</div>
      </div>
      <div className="homepage-selling-item">
        <div className="homepage-title">
          <i className="fa fa-check" aria-hidden="true"> </i>
            Secure Shopping
        </div>
        <div>We use a secure transaction with our latest technological advancements.</div>
      </div>
    </div>
    <HomePageIndexContainer />
    <div className='productsLinkContainer'>
      <Link className='productsLink' to='/products'>See All Food ></Link>
    </div>
  </div>
);

export default homepage;
