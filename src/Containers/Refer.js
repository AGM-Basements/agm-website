import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

import ReferImage from '../Assets/Images/AGM-Reno-Refferal.jpg';

class Refer extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Refer</title>
        </Helmet>
        <GeneralBanner title="REFER A FRIEND & EARN UP TO $1,000!" />
        <div className="container mt-5 text-center">
          <h2>Want to make an extra $1,000?</h2>
          <img src={ReferImage} />
          <h3>Take advantage of our referral program. For each friend or family member you send to us, AGM Renovations will pay you up to $1,000**</h3>
        </div>
      </>
    );
  }
}

export default Refer;