import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import EstimateBanner from '../Common/BannerParts/EstimateBanner';

// import Testimonials from '../Common/Testimonials';
const Warranty = React.lazy(() => import('../Common/Warranty'));
const Testimonials = React.lazy(() => import('../Common/Testimonials'));
const EstimateServices = React.lazy(() => import('./EstimateParts/Services'));

class Estimate extends Component {
  constructor(props) {
    super(props);
    this.useEffect = this.useEffect.bind(this);
  }

  useEffect() {
    window.scrollTo(0, 0)
  };

  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Free Estimate</title>
          <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
        </Helmet>
        <EstimateBanner />
        <div id="estimate-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Suspense fallback={<div>Loading...</div>}>
                  <Testimonials />
                  <Warranty />
                </Suspense>
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <EstimateServices />
            </Suspense>
          </div>

          <div onClick={this.useEffect} className="w-100 text-center mb-5">
            <a className="btn blue-btn">Schedule an Estimate</a>
          </div>
        </div>
      </>
    );
  }
}

export default Estimate;