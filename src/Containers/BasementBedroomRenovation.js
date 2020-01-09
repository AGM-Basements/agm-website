import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementBedroomRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Bedroom Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Bedroom Renovation" />
        <div className="container">
          <p>Are you always looking for places for guests or family members to sleep when they visit? Do you have kids who are dying for their own room? If you answered yes to either of these questions, you will likely discover quite a few benefits when you renovate your basement into a bedroom.</p>

          <p>There are a number of important considerations that must be made if you are adding a basement bedroom to your home. For example, you need closet space and would likely benefit from a bathroom in the area, as well. If this is the case, then our technicians can help you develop an entire basement bedroom design that meets your specific needs.</p>

          <h3>Making Short Work of a Big Job</h3>

          <p>Remodeling a basement and transforming it into a usable and functional space is quite a bit of work. We have the tools and access to the high-quality materials to make your basement bedroom a reality in a timely manner. In addition to handling the logistics of the space, we will also see to all the finishing elements, such as wiring for television or other entertainment elements and plumbing for a sink, toilet or full bathroom.</p>

          <h3>Increase Your Home’s Value</h3>

          <p>In addition to giving you more usable space in your home, creating a basement bedroom will also increase the overall value of your home. This is because you are turning a cold, concrete and likely wet basement space into a finished area that is not only inviting but that will almost double the square footage of your home.</p>

          <p>Adding a bedroom in your basement space is a smart renovation to make. It will make it easier to host guests and even increase the value of your home. It is definitely an investment worth making. Contact us today to <Link to="/estimate">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementBedroomRenovation;