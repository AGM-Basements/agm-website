import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { isWebpSupported } from 'react-image-webp/dist/utils';
import AnnaHarrisImage from '../../Assets/Images/anna-harris.png';
import HomeBannerImage from '../../Assets/Images/DSC1073.jpg';
import HomeBannerImageWebP from '../../Assets/Images/DSC1073.webp';

/* eslint-disable */
class HomeHeader extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <section id="home-banner" style={{ backgroundImage: `url(${isWebpSupported() ? HomeBannerImageWebP : HomeBannerImage})` }}>
        <div className="banner-cover">
          <div className="home-banner-text">
            <p className="home-banner-heading">The Best in Basement Renovations</p>
            <p className="home-banner-subheading">Our team of accredited Interior Designers and Licensed Building Professionals are ready to make your vision of a beautifully finished basement a reality. We have a 20 year proven track record of successfully completed basements and happy clients!</p>
            <strong className="home-banner-subheading">Contact Us Now For A Free Estimate.</strong>
          </div>
          <div className="banner-content d-flex align-items-center">
            <div className="home-banner-content">
              <div className="left">
                <h1>Excellence in Design, Quality Workmanship and a Professional Experience</h1>
                <span className="sub-head">Serving the Greater Toronto Area for over 20 years</span>
              </div>

              <div className="right mobile-none">
                <p>Offering complete basement finishing options, professionally designed to suit your needs.</p>
                <div className="button-desktop">
                  <Link to="/estimate" className="btn blue-btn">Click here for a free quote</Link>
                </div>
              </div>

              <div className="banner-testimonial">
                <p>All the reviews we read were exactly right! It was an excellent customer service experience throughout. We highly recommend AGM</p>
                <div className="author">
                  <div className="author-image">
                    <img src={AnnaHarrisImage} alt="Anna" />
                  </div>
                  <h5>Anna Harris</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHeader;