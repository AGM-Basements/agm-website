import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementOfficeRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Office Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Office Renovation" />
        <div className="container">
          <p>Getting work done with screaming kids, constant interruptions and life can be nearly impossible. However, if you work from home, this can be a reality you have to deal with on a daily basis. Creating a private area to work, where interruptions can be kept to a minimum will likely be ideal. If this is your situation, then investing in a basement office renovation may be a smart move.</p>

          <h3>Creating Your Own Basement Home Office</h3>

          <p>There are a number of features you may need when you are designing an office in your basement. From wiring for computer and phone hookups to natural light from windows or skylights, we can offer any and all elements you may need. These are features that will make any basement office renovation provide the necessary equipment and services to make it a full-functional space.</p>

          <h3>Exceeding Home Office Expectations</h3>

          <p>The goal of our home office renovation services is to exceed any expectations you may have for the space. If you need wireless conferencing abilities, we will integrate the wiring and cables to make this possible. We can help set up your entire network by providing the infrastructure necessary. Not to mention, we handle all the finishing touches, including insulation, AC and heating, flooring, walls and more.</p>

          <p>When we finish your home office renovation, you will love the space and find it offers a place for you to get your work done, with minimal interruptions. Moving into the basement is a smart move and will add value to your home. If you are ready to get started, contact us today to <Link to="/estimate">schedule your free, in-home estimate.</Link></p>
        </div>
      </>
    );
  }
}

export default BasementOfficeRenovation;