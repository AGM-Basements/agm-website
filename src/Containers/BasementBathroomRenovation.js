import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementBathroomRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Bathroom Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Bathroom Renovation" />
        <div className="container">
          <p>Are you tired of having to wait in line for bathroom time in your own home? Would an additional bathroom make life easier for everyone in your family? If so, we can help by providing total basement bathroom renovation services. Regardless of if you are searching for a small bathroom remodel or want to transform the space into a luxurious oasis, we can help.</p>

          <h3>Creating a Basement Washroom You Love</h3>

          <p>We offer a number of modern bathroom designs for you to choose from for your bath remodel. However, more importantly, we also take steps to install the right type of flooring to ensure it is not damaged by water and take the necessary steps to prevent the growth and development of mold.</p>

          <p>In addition to the logistics of the basement bathroom finishing services, we see to all the small details, as well. This includes choosing the best type of bathroom lighting, shower design and installation, installation of a quality, stylish vanity and bathtub refinishing services. Regardless of if you are searching for a traditional design, or something more contemporary, we will help you create the perfect basement bathroom that is not only functional but a room you love.</p>

          <h3>Working Together to Create the Ideal Basement Bathroom</h3>

          <p>We will take the time to speak with you about all the remodeling possibilities, as well as the most important detail of the project – your budget. We will make the most of your money to create a space that meets your needs. We will also handle logistic issues, such as proper ventilation for the space and running the plumbing in the most efficient manner.</p>

          <p>Are you ready to create an oasis in your basement? If so, contact us today to <Link to="/estimate">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementBathroomRenovation;