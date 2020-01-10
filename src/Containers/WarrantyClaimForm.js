import React, { Component, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class WarrantyClaimForm extends Component {
  static propTypes = {
  };

  state = {
    step: 1,
    step_one_data: {},
    step_two_files: [],
  };

  stepComplete = (data) => {
    console.log('DATA', data);
    if (this.state.step === 1) {
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
        <GeneralBanner title="Warranty Claim Form" />
        <div id="warranty-service-request-form" className="container" style={{ paddingTop: "3rem !important;", width: "50%" }}>
          <iframe src="https://welmond.wufoo.com/forms/x3m90cb16cgqdz/" width="1920" height="1500" align="middle"></iframe>
        </div>
      </>
    );
  }
}

export default WarrantyClaimForm;