import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Braintree from './Braintree';

class PaymentReceipt extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Payment</title>
          <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
        </Helmet>
        <GeneralBanner title="Payment Receipt" />
        <div id="payment-receipt-container" className="container" style={{}}>
          <div className="row align-items-start">
            <div className="col-lg-6">
              <div id="card-styles" className="container">
                <p className="card-title card-data">AGM Basements</p>
                <p className="card-data">45 Tigi Court<br></br>Vaughan, ON L4K 5E4<br></br>416 477-5429</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Braintree />
            </div>
          </div>
          <div style={{ marginTop: '2rem' }} className="row align-items-start">
            <div className="col-lg-6">
              <div id="card-styles" className="container">
                <p className="card-title card-data">Resolved from:</p>
                <p className="card-data">Full Name<br></br>Address, City, State, Postal Code<br></br>416 XXX-XXXX</p>
              </div>
            </div>
            {/* <div className="row"> */}
            <div className="col-lg-3">
              <div className="action-button">
                Email Invoice
                </div>
            </div>
            <div className="col-lg-3">
              <div className="action-button">
                Proceed to checkout
                </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default PaymentReceipt;