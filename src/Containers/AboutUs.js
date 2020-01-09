import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

import AGMTeamBBQ2016 from '../Assets/Images/AGM-Team-BBQ-2016-600x350.jpg';
import ChristmasInOffice from '../Assets/Images/ChristmasInOffice.jpg';
import AGMBBQ2017 from '../Assets/Images/AGMBBQ2017.jpg';
import HollywoodChristmas2016 from '../Assets/Images/HollywoodChristmas2016.jpg';

class AboutUs extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | About Us</title>
        </Helmet>
        <GeneralBanner title="About Us" />
        <div className="container">
          <h1>About AGM Basement Renovations</h1>
          <h3>Our mission is to ensure exceptional service at competitive prices</h3>
          <p className="content">AGM Renovations experts provide quality basement finishing services throughout the GTA and the surrounding area. See our Service Area for the complete list of towns where our basement renovations services are offered. We offer 100% satisfaction guarantee on our workmanship and offer competitive prices with exceptional quality. We believe that our low pricing should not mean clients need to expect lower quality, so expect more and when you need the best; trust AGM Renovations. We guarantee that you will be completely satisfied, which means that you don’t make a final payment pay until the job is done. When you need the best; trust only the best at AGM Renovations. Our mission is to be committed to excel in the work we do. We are committed to excel and maintain a sense of pride in our all we do!</p>

          <h2 style={{ textAlign: 'center' }}>THE AGM FAMILY</h2>

          <div className="text-center heart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
          </div>

          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className="wpb_heading wpb_singleimage_heading">AGM Renovations BBQ Summer 2016</h2>
              <Link to="/our-team/agm-renovations-bbq-event-summer-2016/">
                <img src={AGMTeamBBQ2016} width="600" height="350" alt="Agm Team" title="agm-team-bbq-2016" />
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <h2 className="wpb_heading wpb_singleimage_heading">AGM Christmas In The Office 2016</h2>
              <Link to="/our-team/agm-renovations-christmas-in-the-office-2016/" target="_self" className="vc_single_image-wrapper vc_box_border  vc_box_border_grey">
                <img className="vc_single_image-img lazy loaded" src={ChristmasInOffice} width="600" height="350" alt="AGM Christmas In The Office 2016" title="20161223_143235" />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className="wpb_heading wpb_singleimage_heading">AGM Renovations BBQ Summer 2017</h2>
              <Link to="/our-team/agm-renovations-bbq-event-summer-2017/" target="_self" className="vc_single_image-wrapper vc_box_border  vc_box_border_grey">
                <img className="vc_single_image-img lazy loaded" src={AGMBBQ2017} width="600" height="350" alt="AGM Renovations BBQ Summer 2017" title="AGM-BBQ_121" />
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <h2 className="wpb_heading wpb_singleimage_heading">AGM-Hollywood Christmas Party 2016</h2>
              <Link to="/our-team/agm-hollywood-christmas-party-2016/" target="_self" className="vc_single_image-wrapper vc_box_border  vc_box_border_grey">
                <img className="vc_single_image-img lazy loaded" src={HollywoodChristmas2016} width="600" height="350" alt="AGM-Hollywood Christmas Party 2016" title="AGM2017_006" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;