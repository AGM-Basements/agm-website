import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class BasementRenovationsInHamilton extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations In Hamilton</title>
        </Helmet>
        <GeneralBanner title="Basement Renovations in Hamilton" />
        <div className="container">
          <p>AGM Basements is excited to be able to offer a creative and experienced service in Hamilton. We have completed over 80 basements in the area of varying designs and finishes and are able to boast affordable, desirable solutions to bring your space to life.</p>

          <p>We are a leader in basement renovations regardless of the kind of home you have, irrespective of size, stature or age; and we dedicate ourselves to a job well done. Our team of basement contractors, electricians, basement builders, interior designers and more, are committed experts who work seamlessly alongside our clientele to ensure complete transparency and satisfaction all round.</p>

          <p>Our years of experience means we've been able to assemble and become one of the best basement renovation companies in Hamilton and are proud to have the capability to take your basement from an unused space to a stunning living area.</p>

          <p>Some of the things we have done in the past include:</p>
          <ul>
            <li>Fireplaces</li>
            <li>Saunas</li>
            <li>Wine Cellars</li>
            <li>Kitchens</li>
            <li>Bars</li>
          </ul>
          <h3>Satisfaction guaranteed</h3>

          <p>With AGM on board to complete your basement remodelling, you're working with a company you can trust. Our 100% satisfaction guarantee means you don’t have to worry about your vision being implemented and we are happy to welcome potential clients to attend one of our many finishing showcases or open houses so you can see the quality for yourself.</p>

          <p>Customer safety and satisfaction is the number one priority; we ensure all our products are finished to the highest safety standards, this includes our signature water seal, our total seal for mould and rust as well as our total seal for radon, a guarantee that your basement will not only look good and be safe but continue to do so.</p>

          <p>So what are you waiting for? We offer a free estimate service, so please give us a call today!</p>
        </div>
      </>
    );
  }
}

export default BasementRenovationsInHamilton;