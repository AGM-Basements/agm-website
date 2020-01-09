import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Bbq2016 from '../Assets/Images/AGM-Team-BBQ-2016.jpg';

class OurTeam extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | 2016 Summer BBQ</title>
        </Helmet>
        <h4>AGM BBQ Summer 2016</h4>
        <img src={Bbq2016} alt="Summer BBQ"/>
      </>
    );
  }
}

export default OurTeam;