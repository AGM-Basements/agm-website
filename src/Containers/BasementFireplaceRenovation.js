import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementFireplaceRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Fireplace Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Fireplace Renovation" />
        <div className="container">
          <p>There is no question that the winter’s in Ontario and surrounding areas can be brutal. There is nothing quite as comforting as a warm, roaring fire to warm up next to. If you have transformed your basement space into a nice living area, extra bedroom or even had a wet bar installed, you may be interested in adding a basement fireplace, as well. If this is the case, we can help.</p>

          <h3>Creating a Unique Basement Fireplace</h3>

          <p>If you are thinking about installing a fireplace in the basement, you may wonder how this will work. After all, you have to have a way to allow the fumes and smoke to escape, right? Don’t worry, our basement fireplace design will take all of this into consideration to ensure you get the feature you want and that it is safe to use on a daily basis.</p>

          <h3>Renovation Services You can Count On</h3>

          <p>If you are ready to invest in basement fireplace renovation, call us today. We will handle all the logistics of the project and consider the best type of fireplace for the area. You can choose from contemporary natural stone or more rustic brick for the fireplace. The choice is yours. If you are unsure of the style that best suits the space, we can help. We can evaluate the basement area and find a design and style that complement the other elements that are present.</p>

          <p>We are confident that the basement fireplace plan we ultimately choose for you will meet and exceed your wants and needs. Contact us today to <Link to="/schedule">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementFireplaceRenovation;