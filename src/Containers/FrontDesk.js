import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class FrontDesk extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Front Desk</title>
        </Helmet>
        <GeneralBanner title="Front Desk" />
        <div className="container mt-5">
          <p>Lead Successfully Booked.</p>
        </div>
      </>
    );
  }
}

export default FrontDesk;