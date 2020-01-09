import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class FinanceIt extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | FinanceIt</title>
        </Helmet>
        <GeneralBanner title="Financeit" />
        <div className="container">
          <h2>Financing As Low As $87/Week OAC!</h2>
          <p>Based on a $40k renovation. It’s the perfect time to invest in your home comfort with our new and improved financing. We’ve partnered with Financeit to offer you an affordable monthly payment option for your next basement renovation. It’s now easier than ever to make your home feel like new again.</p>
          <iframe src="https://www.financeit.ca/en/direct/payment-plan/cD1adk9IV2NtTk5aTlBnRjVRNGhXLTd3JnM9MCZ2PTEmZj0mdD0mbD0mYT0yMjUzMTE=/application-form" width="100%" height="2500px" frameBorder="0"></iframe>     
        </div>
      </>
    );
  }
}

export default FinanceIt;