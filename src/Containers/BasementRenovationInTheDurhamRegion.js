import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementRenovationInTheDurhamRegion extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovation In The Durham Region</title>
        </Helmet>
        <GeneralBanner title="Basement Renovations in Vaughan" />
        <div className="container">
          <p>AGM Basements is proud to offer an experienced and creative service in the Durham region. We have completed over 20 basements in the area of all shapes and sizes and are able to offer affordable desirable solutions to bring your space to life. Our design and building experts work closely with you to ensure every detail is exactly as you imagined it.</p>

          <p>Basement finishing is no small feat for even the most experienced basement renovation companies. It requires a team of basement builders, basement contractors, electricians, interior designers and more. AGM have excelled in the field for the past 18 years and is proud to offer unparalleled service with quality that speaks for itself and countless referrals to boot.</p>

          <p>We've been able to assemble a team to ensure your custom design needs are met and are proud to have the capability to make your basement the best room in your house.</p>

          <p>Some of the things we have done in the past include:</p>
          <ul>
            <li>Kitchens</li>
            <li>Bars</li>
            <li>Fireplaces</li>
            <li>Saunas</li>
            <li>Wine Cellars</li>
          </ul>

          <h3>Why choose us?</h3>

          <p>When you choose AGM to complete your basement remodelling, you're choosing a company you can trust. We guarantee 100% satisfaction with your completed project and welcome potential clients to attend one of our many finishing showcases and open houses for you to instantly see the benefit and quality of our finished projects.</p>

          <p>The positives of an AGM basement remodelling can be seen in the many benefits it brings to your home such as the additional living space/guest room, which could bring additional rental income and is an affordable and easy way to bring all these benefits to your home.</p>

          <p>Our customer guarantee means that we ensure your satisfaction. We're so confident that we guarantee completion on time or reimbursement. If you live in the Durham Region, give us a call today and use our free estimate service to find out how we can improve your home today.</p>
        </div>
      </>
    );
  }
}

export default BasementRenovationInTheDurhamRegion;