import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementFamilyRoomRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Family Room Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Family Room Renovation" />
        <div className="container">
          <p>Is your living space somewhat lackluster? Does it feel cramped or too small for your family? If so, it may be time to consider turning your unused basement space into a basement family room. With our help, you can easily transform your concrete, cold, damp basement into a usable, livable space.</p>

          <p>When it comes to basement renovation and finishing services, you can count on our technicians at AGM Renovations. We know how to take a seemingly uninhabitable space and implement a basement family room design to make the space usable and unrecognizable.</p>

          <p>Turning the basement into a carpeted, insulated and air conditioned (or heated), usable space means that you will almost double the livable square footage of your home. We can wire the space for cable and game hookups and even install convenience features such as a small refrigerator or sink.</p>

          <p>When you decide to invest in basement renovation services, you will find we handle the entire process – from beginning to end. We will create the initial design for the space and determine what work needs to be done. From wiring and plumbing to installing the proper type of flooring and adding large windows for natural light, we can create an inviting and welcoming area you will look forward to spending time in.</p>

          <p>Take some time to speak with our design professionals to create a space that suits you and your family’s needs. We can implement a number of features into the basement family room remodel including fireplaces, wet bars, bathrooms and more. Call us to begin your basement renovation with a <Link to="/estimate">free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementFamilyRoomRenovation;