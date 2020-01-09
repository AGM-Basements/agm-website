import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class DoorToDoor extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Door to Door</title>
        </Helmet>
        <GeneralBanner title="Door to Door Campaign" />
        <div className="container mt-5">
          <iframe height="1500" allowtransparency="true" frameBorder="0" scrolling="no" style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/z981qk0v41123/"><br />
            <a href="https://welmond.wufoo.com/forms/z981qk0v41123/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default DoorToDoor;