import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 7000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <Slider className="SliderContainer"{...settings}>
        <div className="slider one" ></div>
        <div className="slider two" ></div>
        <div className='slider three'></div>
        <div className="slider four"></div>
      </Slider>
    );
  }
}

export default SimpleSlider;
