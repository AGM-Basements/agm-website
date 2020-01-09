import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class CallCenter extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Call Center</title>
        </Helmet>
        <GeneralBanner title="Call Center Form Submission" />
        <div className="container mt-5">
          <iframe style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/r8fllkp09z0onc/" height="484" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/r8fllkp09z0onc/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default CallCenter;