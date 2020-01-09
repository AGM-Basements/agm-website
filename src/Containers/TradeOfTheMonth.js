import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class TradeOfTheMonth extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Trade Of The Month</title>
        </Helmet>
        <GeneralBanner title="Trade Of The Month" />
        <div className="container">
          <p style={{textAlign: 'center'}}>Please fill out any categories that are applicable for your colleague whom you are voting for.</p>
          <p> </p>
          <iframe style={{width: '100%', border: 'none'}} src="https://welmond.wufoo.com/embed/zo6g86f1sny6hj/" height="1200" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/zo6g86f1sny6hj/">
              Fill out my Wufoo form!
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default TradeOfTheMonth;