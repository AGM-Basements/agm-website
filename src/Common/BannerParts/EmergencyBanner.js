import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";

import Foundation from "../../Assets/Images/Emergency/1.jpg";
import Furnace from "../../Assets/Images/Emergency/2.jpg";
import Electrical from "../../Assets/Images/Emergency/3.jpg";
import Water from "../../Assets/Images/Emergency/4.jpg";
import Roof from "../../Assets/Images/Emergency/5.jpg";
import Plumbing from "../../Assets/Images/Emergency/6.jpg";

class EmergencyBanner extends Component {
  static propTypes = {};

  state = {
  };

  render() {
    return (
      <div className={"emergency-banner row p-3"}>
        <div className={"mobile-none left-text col-md-4 col-sm-12"}>
          <p style={{ marginTop: '0' }}>
            These are unprecedented times for everyone..</p>
          <p>
            AGM Renovations is now ready to help all homeowners with
              "ANY" kind of emergency maintenance and repairs.</p>
          <p>Plumbing problems, furnace and A/C problems, electrical
          problems, water damages, foundation leaks, roof leaks,
              window leaks and much more.</p>
          <p>You have a problem – we can fix “ANY” kind of emergency
          maintenance and repairs in your home.
            </p>
          <div className="mobile-none free-consultation-btn hvr-grow">
            <Link to="/estimate" className="btn light-blue-sq-btn-2">
              Book Free Safeguard Service
            </Link>
          </div>
        </div>
        <div className={"right-content col-md-8 col-sm-12"}>
          <div className={"row mobile-emergency-grid"}>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Foundation} />
              <p>Foundation Leaks</p>
            </div>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Furnace} />
              <p>Furnace/AC Repair</p>
            </div>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Electrical} />
              <p>Electrical</p>
            </div>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Water} />
              <p>Water Damages</p>
            </div>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Roof} />
              <p>Roof Leaks</p>
            </div>
            <div class={"col-md-4 col-sm-6"}>
              <img src={Plumbing} />
              <p>Plumbing</p>
            </div>
          </div>
        </div>

        <div className="desktop-none free-consultation-btn hvr-grow">
          <Link to="/estimate" className="btn light-blue-sq-btn-2">
            Book Free Safeguard Service
            </Link>
        </div>
        <br></br>
        <span className="desktop-none glow" style={{ fontSize: '0.75rem', paddingBottom: '0.5rem' }}>SPRING CLEAN UP: Book before May 15th and get $5,000 OFF </span>
      </div>
    )
  }
}

export default EmergencyBanner;