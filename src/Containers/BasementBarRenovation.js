import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementBarRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Bar Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Bar Renovation" />
        <div className="container">
          <p>Do you love to entertain, but want a better place to host guests than your kitchen? If so, consider turning your basement into a wet bar. Instead of allowing this space to remain your dark laundry area, let our technicians transform the space into a functional and fun basement bar. We have a number of basement design ideas that will quickly and easily transform the space into a fully functioning wet bar.</p>

          <h3>Creation of Your New Basement Bar</h3>

          <p>Do you love the thought of a basement bar, but lacking in terms of ideas? If so, we can show you a number of basement bar plans to help get you started. After careful evaluation of your space, we can select the plans that will best suit the amount of room and budget you have. Keep in mind, the features and accessories you want to add to the space, such as basement bar pictures, shelving, storage, etc. will add to the functionality of the space and make it more enjoyable to spend time in.</p>

          <h3>Getting Started with Your Basement Bar Renovation</h3>

          <p>What is in your basement right now? If it is a blank slate, that will make it easier to install the components of your new wet bar. We will ensure the highest quality materials are used, carefully select the proper type of flooring and add all the “extras” you desire – such as granite counters or a full entertainment area – according to your specifications.</p>

          <p>Let us begin the transformation of your basement today by creating the plans or design for a wet bar. We know you will love the look of the space when our work is done. You will also have a new place to spend time and entertain family and friends. <Link to="/estimate">Schedule a Free in-home estimate</Link> and let us demonstrate the quality and value you will get with AGM.</p>
        </div>
      </>
    );
  }
}

export default BasementBarRenovation;