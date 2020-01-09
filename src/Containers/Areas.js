import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class Areas extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Areas</title>
        </Helmet>
        <GeneralBanner title="Areas" />
        <div className="container mt-5">
          <p><Link to="/brampton/">Brampton</Link></p>
          <p><Link to="/durham-region">Durham Region</Link></p>
          <p><Link to="/hamilton/">Hamilton</Link></p>
          <p><Link to="/markham">Markham</Link></p>
          <p><Link to="/mississauga">Mississauga</Link></p>
          <p><Link to="/oakville">Oakville</Link></p>
          <p><Link to="/richmond-hill">Richmond Hill</Link></p>
          <p><Link to="/vaughan">Vaughan</Link></p>
        </div>
      </>
    );
  }
}

export default Areas;