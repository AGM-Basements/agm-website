import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Image from 'react-image-webp';
import HomeBanner from '../Common/BannerParts/HomeBanner';
import Testimonials from '../Common/Testimonials';
import ImageOne from '../Assets/Images/image_1.jpg';
import ImageTwo from '../Assets/Images/image_2.jpg';

import ImageOneWebP from '../Assets/Images/image_1.webp';
import ImageTwoWebP from '../Assets/Images/image_2.webp';

class Home extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations</title>
        </Helmet>
        <HomeBanner />
        <div className="container">
          <div className="page-title">
            <h1>Welcome to AGM Basements, Your Basement Renovation Professionals</h1>
          </div>

          <div className="home-services">
            <div className="service service-image-left">
              <div className="left">
                {/* <img src={ImageOne} alt="Basement Renovation" /> */}
                <Image
                  src={ImageOne}
                  webp={ImageOneWebP}
                  alt="Basement Renovation"
                />
              </div>

              <div className="right">
                <h2>Basement Renovation</h2>
                <p>As the first company to specialize exclusively in basement renovation, AGM Basements has listened to customers for over 20 years, and has developed a tried and true process focused on you.  We’re here to help you realize your dream basement, to make the best decisions for your investment, and for your home and your family.</p>
                <div className="sub-services">
                  <ul>
                    <li><Link to="/recent-work">Recreation <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Offices <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Fully Functional Living Space <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Sauna and Workout Space <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service service-image-right">
              <div className="left">
                <Image
                  src={ImageTwo}
                  webp={ImageTwoWebP}
                  alt="Interior Finishing"
                />
              </div>

              <div className="right">
                <h2>Interior Finishing</h2>
                <p>From new living and entertainment spaces, to additional bedrooms, bathrooms or full rental apartments, AGM has the expertise to design your space for optimal function and enjoyment. If you’re looking to enhance your basement with a wine room, theatre room, home gym or in-home office, we’re the most experienced basement renovation experts to complete your project. Our accredited Designers, attentive Customer Care staff and seasoned Project Managers will work with you closely throughout the process to create your perfect space. We’re with you every step of the way.</p>
                <div className="sub-services">
                  <ul>
                    <li><Link to="/recent-work">Painting <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Flooring <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Bathroom and Kitchen Tiling <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Plumbing and Electric <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                    <li><Link to="/recent-work">Drywall <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"/></svg></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="get-quote-btn">
              <Link to="/estimate" className="btn light-blue-btn">Get a Quote</Link>
            </div>
          </div>

          <div id="our-customers">
            <Testimonials />
          </div>
        </div>
      </>
    );
  }
}

export default Home;