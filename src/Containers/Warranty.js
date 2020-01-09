import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

import CustomerInfo from './WarrantySteps/CustomerInfo';
import UploadFiles from './WarrantySteps/UploadFiles';
import Issues from './WarrantySteps/Issues';

class Warranty extends Component {
  static propTypes = {
  };

  state = {
    step: 1,
    step_one_data: {},
    step_two_files: [],
  };

  stepComplete = (data) => {
    console.log('DATA', data);
    if(this.state.step === 1) {
      this.setState({
        step_one_data: data
      }, () => {
        this.setState({
          step: 2,
        });
      });
    } else if (this.state.step === 2) {
      this.setState({
        step_two_files: data
      }, () => {
        this.setState({
          step: 3,
        });
      });
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Warranty</title>
          <meta name="description" content="AGM Basements has a 4.5-star rating with over 200 Google Reviews as GTA’s top-rated basement renovations we provide 100% customer satisfaction." />
        </Helmet>
        <GeneralBanner title="Warranty" />
        <div id="form-steps">
          <div className="step customer_info current">
            <div className="count">1</div>
            <p>Your Info</p>
          </div>

          <div className="step warranty_info">
            <div className="count">2</div>
            <p>Warranty Info</p>
          </div>

          <div className="step issue_info">
            <div className="count">3</div>
            <p>Issue</p>
          </div>
        </div>
        {/* <!-- end steps --> */}

        <div id="form">
          <div className="container">
            <form action="/" id="warranty-form" className="dropzone">
              <div className="step1">
                {this.state.step === 1 && <CustomerInfo stepComplete={(data) => this.stepComplete(data)} />}
              </div>

              <div className="step2">
                {this.state.step === 2 && <UploadFiles stepComplete={(data) => this.stepComplete(data)} />}
              </div>

              <div className="step3">
                {this.state.step === 3 && <Issues />}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Warranty;