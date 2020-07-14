import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import LazyLoad from 'react-lazyload';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from "../../Assets/Images/mobile-home-banner/1.jpg";
import Banner2 from "../../Assets/Images/mobile-home-banner/2.jpg";
import Banner3 from "../../Assets/Images/mobile-home-banner/3.jpg";
import Banner4 from "../../Assets/Images/mobile-home-banner/4.jpg";
import Banner5 from "../../Assets/Images/mobile-home-banner/5.jpg";
import Banner6 from "../../Assets/Images/mobile-home-banner/6.jpg";
import Banner7 from "../../Assets/Images/mobile-home-banner/7.jpg";
import Banner8 from "../../Assets/Images/mobile-home-banner/8.jpg";
import Banner9 from "../../Assets/Images/mobile-home-banner/9.png";
import Banner10 from "../../Assets/Images/mobile-home-banner/10.png";

/* eslint-disable */
class MobileHomeHeader extends Component {
  render() {
    const settings = {
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      centerPadding: 0,
      speed: 1000
    };
    const HomePageBanner = [
      { src: Banner1 },
      { src: Banner2 },
      { src: Banner3 },
      { src: Banner4 },
      { src: Banner5 },
      { src: Banner6 },
      { src: Banner7 },
      { src: Banner8 },
      { src: Banner9 },
      { src: Banner10 }
    ];
    return (
      <section id="mobile-home-banner">
        {/* <LazyLoad once> */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Slider className={'mobile-slider'} {...settings}>
          {HomePageBanner.map((banner, i) => (
            <div key={"home-page-banner" + i}>
              <img src={banner.src} alt={"Home page banner"} />
            </div>
          ))}
        </Slider>
        {/* </Suspense> */}
        {/* </LazyLoad> */}
        <div className="home-banner-button-mobile mt-3">
          <Link to="/estimate" className="btn red-btn">
            Get A free quote
          </Link>
        </div>
        {/* <div className="banner-content d-flex align-items-center"> */}
        <div className="mobile-banner-content">
          <div className="left">
            <h1>
              Welcome to AGM Renovations, your basement and bathroom
              professionals!
            </h1>
            <span className="sub-head">
              Serving the Toronto Area for over 20 years
            </span>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}

export default MobileHomeHeader;
