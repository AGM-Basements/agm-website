import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementRenovationServices extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovation Services</title>
        </Helmet>
        <GeneralBanner title="Basement Renovation Services" />
        <div className="container">
          <p>For years, AGM Renovations has satisfied thousands of Ontario homeowners with their proven and effective remodeling and finishing services. We have effective solutions and ideas for any basement project; this includes moisture control in the basement, installation of air systems, trimming, ceilings, flooring and just about everything and anything required to create the most attractive and long-lasting conditioned space.</p>
          <p><strong>Services Offered for Basement Remodeling</strong></p>
          <p><strong>Our team offers a number of basement renovation and finishing services, including the following:<br />
          </strong></p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li><Link to="/all-service/basement-bathroom-renovation/">Basement Bathroom Renovation</Link></li>
                <li><Link to="/all-service/basement-home-kitchen/">Kitchen Renovation</Link></li>
                <li><Link to="/all-service/basement-home-bar/">Bar Renovation</Link></li>
                <li><Link to="/all-service/basement-home-fireplace/">Fireplaces</Link></li>
                <li><Link to="/all-service/basement-home-theater/">Theaters/Entertainment centres</Link></li>
                <li><Link to="/all-service/basement-home-recreation-room/">Recreation/Game Rooms</Link></li>
                <li><Link to="/all-service/basement-home-inlaw-suite/">In-Law suites</Link></li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><Link to="/all-service/basement-home-bedroom/">Bedrooms</Link></li>
                <li><Link to="/all-service/basement-home-office/">Offices</Link></li>
                <li><Link to="/all-service/basement-home-saunas/">Saunas</Link></li>
                <li><Link to="/all-service/basement-home-family-room/">Family Rooms</Link></li>
                <li><Link to="/all-service/basement-home-workout-room/">Workout/Gym/Exercise Rooms</Link></li>
                <li><Link to="/all-service/basement-apartment-renovation/">Basement Apartments</Link></li>
              </ul>
            </div>
          </div>
          <p><strong>Dedicated to the Safety of Your Family</strong></p>
          <p>At AGM Renovations, our technicians do more than just remodel and finish your basement space; they will also make sure your family’s safety and health are not threatened thanks to our professional radon detection and services. We will handle all basement remodeling needs and offer any other services that are necessary. Consider us your one-stop shop for any and all basement finishing services you require. This means you don’t have to worry about contacting multiple contractors when working with us.</p>
          <p><strong>Transforming Your Basement Space</strong></p>
          <p>Thanks to the versatility of our basement remodeling services, you can do virtually anything you desire with the space. Add on an extra bedroom or a home gym, or turn the space into a fully functioning kitchen. If that doesn’t suit your needs, consider adding a basement bar, children’s play area, home office or anything else you can imagine. With the help of our technicians, you will find the dark, dank basement of the past is turned into a functional and usable space.</p>
          <p><strong>Reliable, Efficient, and Quality Basement Restoration Services</strong></p>
          <p>When it comes to finishing and remodeling your basement, we only use the highest quality products that are available. This is done to ensure that you and your loved ones enjoy the timeless quality you want and deserve. Ready to get started? Contact us today to <Link to="/estimate">schedule your free in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementRenovationServices;