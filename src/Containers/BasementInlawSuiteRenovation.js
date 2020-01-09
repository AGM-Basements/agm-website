import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementInlawSuiteRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Inlaw Suite Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement In-law Suite Renovation" />
        <div className="container">
          <p>Chances are you have heard of an in-law suite; however, you may not have had the space on your property upstairs, or the funds to create this separate addition to your home. If this is the case, then you may find that an in-law suite in the basement is an ideal option. This is typically a more affordable renovation that will meet the needs of your in-laws, or anyone else who may need a place to stay.</p>

          <p>Creating an in-law suite in your basement offers a number of exciting benefits. You can have your loved ones in the same structure as you, but they will still have their own space. In fact, we can provide renovation plans that make the suite a fully-functioning area, which includes a kitchen area and bathroom.</p>

          <p>Some of the services we offer when creating the basement inlaw suite design include adding insulation to the basement to keep it a comfortable temperature, helping you select the right type of flooring and ceiling material for adequate acoustics and aesthetics and running any wires or plumbing that is necessary to make the space comfortable.</p>

          <p>If you are ready to create your own, on-site mother in law suite in your own basement, calls us today. Our technicians can create a unique design that is ideal for the space available in your basement. We will see to all the finishing details of the remodeling project. Contact us today to <Link to="/estimate">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementInlawSuiteRenovation;