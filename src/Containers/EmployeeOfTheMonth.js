import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class EmployeeOfTheMonth extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Employee Of The Month</title>
        </Helmet>
        <GeneralBanner title="Employee Of The Month" />
        <div className="container">
          <p style={{textAlign: 'center'}}>Please fill out any categories that are applicable for your colleague whom you are voting for.</p>
          <p> </p>
          <iframe style={{width: '100%', border: 'none'}} src="https://welmond.wufoo.com/embed/z3lzuyx1fs4qgv/" height="1200" frameBorder="0" scrolling="no"><br />
            <a href="https://welmond.wufoo.com/forms/z3lzuyx1fs4qgv/">
              Fill out my Wufoo form!
            </a>
          </iframe>
        </div>
      </>
    );
  }
}

export default EmployeeOfTheMonth;