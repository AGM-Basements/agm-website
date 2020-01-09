import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class Dordana extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Dordana</title>
        </Helmet>
        <GeneralBanner title="Call Center to Dordana" />
        <div className="container mt-5">
          <iframe style={{ width: '100%', border: 'none' }} src="https://welmond.wufoo.com/embed/zs9op751wge634/" height="484" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/zs9op751wge634/"><br />
              Fill out my Wufoo form!<br />
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default Dordana;