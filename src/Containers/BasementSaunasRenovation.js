import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementSaunasRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Saunas Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Saunas Renovation" />
        <div className="container">
          <p>Basement saunas offer a relaxing and healthy way to spend some leisure time alone or with family members and guests, all in your own home. If you like the thought of having an indoor sauna in your basement, then call us to begin the renovation process right away. The project requires a bit of time and effort, but with our professional and experienced technicians, you will be enjoying your new sauna in no time.</p>

          <p>We understand that constructing a sauna in your basement will require careful planning. In addition to having the necessary support, it also requires electrical and plumbing components to work properly. We have all the tools and materials to handle the installation of the cedar or plywood walls and ceilings and will ensure there is proper ventilation so you can safely use your new basement sauna.</p>

          <p>If you want to install a sauna in your basement, we may have to offer some finishing work to the remainder, of the space, as well. We can add a small sitting area, or attached changing room, so you can enjoy the sauna with guests and friends who visit your home. We will make sure you can make the most of the space by installing all the small details that will make the space easy and fun to use.</p>

          <p>When we begin your project we can provide you with a design plan, as well as a cost estimate for the sauna remodeling process. Our goal is to create the space you want, without going over your established budget. Once the sauna is installed you will have a nice, relaxing area in the basement where all you did was laundry in the past. Call us today to get started and <Link to="/estimate">schedule your free, in-home estimate.</Link></p>
        </div>
      </>
    );
  }
}

export default BasementSaunasRenovation;