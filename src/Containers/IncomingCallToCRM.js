import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class IncomingCallToCRM extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Incoming Call to CRM</title>
        </Helmet>
        <GeneralBanner title="Incoming Call to CRM" />
        <div className="container mt-5">
          <iframe height="1500" allowtransparency="true" frameBorder="0" scrolling="no" style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/k195g4bf1y4xl2q/"><br />
            <a href="https://welmond.wufoo.com/forms/k195g4bf1y4xl2q/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default IncomingCallToCRM;