import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import '../../../styles/slider.css'

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo pariatur explicabo
          delectus totam natus, fugit suscipit
          nulla earum repudiandae enim praesentium
          facilis architecto maxime vitae dolorem
          sapiente itaque neque minima.
        </p>
        <div className=" slider__content d-flex align-items-center justify-content-center gap-3">
          <img
            src={ava01}
            alt="avatar"
            className="rounded"
          />
          <h6>Michael Blake</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo pariatur explicabo
          delectus totam natus, fugit suscipit
          nulla earum repudiandae enim praesentium
          facilis architecto maxime vitae dolorem
          sapiente itaque neque minima.
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3">
          <img
            src={ava02}
            alt="avatar"
            className="rounded"
          />
          <h6>Mitchell May</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo pariatur explicabo
          delectus totam natus, fugit suscipit
          nulla earum repudiandae enim praesentium
          facilis architecto maxime vitae dolorem
          sapiente itaque neque minima.
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3">
          <img
            src={ava03}
            alt="avatar"
            className="rounded"
          />
          <h6>Steven Larson</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
