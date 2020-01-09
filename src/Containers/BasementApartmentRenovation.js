import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementApartmentRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Basement Apartment Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Apartment Renovation" />
        <div className="container">
          <p>Have you ever considered whether or not you could make money from your own home? Or, do you have a child who wants to move out, but may not have the funds to do so? If so, a basement apartment may be a smart option. We can provide you with a number of unique basement renovation ideas to easily take your basement space from cold and unusable, to comfortable and featuring all the comforts necessary from an authentic apartment.</p>

          <p>We can add any and all features for your basement apartment, including kitchen, bathroom and even a fireplace if you desire. We will ensure the proper ventilation and insulation is installed and provide the necessary wiring and plumbing to finish the space. We have a number of basement apartment renovation ideas and can create a unique one for your space if necessary.</p>

          <p>We will also work to keep the basement apartment remodeling costs down, which will help maximize the budget you have while using only the highest quality materials available. A basement apartment can increase the value of your home, provide your children a place to live when they are trying to make it on their own and even give you a way to make a bit of money when all your kids finally move out.</p>

          <p>With our basement renovation services, we will make the most of your basement space and ensure the apartment exceeds the expectations you have. Call us today to evaluate your space and provide you with an <Link to="/estimate">estimate</Link> for the renovation process.</p>
        </div>
      </>
    );
  }
}

export default BasementApartmentRenovation;