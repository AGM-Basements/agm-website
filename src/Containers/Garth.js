import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class Garth extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Garth</title>
        </Helmet>
        <GeneralBanner title="Call Center to Garth" />
        <div className="container mt-5">
          <iframe style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/z19c5mwa0tdv8gx/" height="484" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/z19c5mwa0tdv8gx/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default Garth;