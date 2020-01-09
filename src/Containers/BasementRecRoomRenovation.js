import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementRecRoomRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Rec Room Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Rec Room Renovation" />
        <div className="container">
          <p>Are you tired of your kids taking over the living room with their friends? Do poker nights get a little crazy from time to time? If so, you may be ready to move these activities out of the family room and into a basement game room. However, if the space is all concrete and cold, then you may wonder how to get started.</p>

          <p>If you are ready to transform the space into a basement rec room, then we are here to help. In fact, the entire process is much easier than you may think. With our experience, ability and great game room basement design ideas, you will find the transformation pretty quick and efficient.</p>

          <p>In addition to making the space warm and inviting, we will also see to a number of common basement issues, such as issues with moisture, insulation, and proper ventilation to be able to comfortably spend time downstairs. We will also see to all the aesthetics of the space. For example, we can add cabling for entertainment and gaming setup, as well as plumbing for a sink or other fixtures that would make spending time in the new game room convenient.</p>

          <p>Our game room renovation services are designed with real people in mind. We can create a multi-functional space for your kids, spouse and you. In fact, we can turn the recreation room in a basement into a craft corner, gaming area and the ideal place to host poker night.</p>

          <p>Call us today to get started with your game room remodeling process. Your basement play room is just a few weeks away! Contact us today to <Link to="/schedule">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementRecRoomRenovation;