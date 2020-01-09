import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class CallCenterBrandon extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Call Center Brandon</title>
        </Helmet>
        <GeneralBanner title="Call Center to Brandon" />
        <div className="container mt-5">
          <iframe style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/zwtijl81qc6sgd/" height="484" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/zwtijl81qc6sgd/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default CallCenterBrandon;