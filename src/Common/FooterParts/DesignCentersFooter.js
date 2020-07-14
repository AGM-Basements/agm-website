import React, { Component } from "react";
import Email from "../../Assets/Images/email.svg";
import Pin from "../../Assets/Images/pin.svg";
import Phone from "../../Assets/Images/phone.svg";

/* eslint-disable */
class DesignCentersFooter extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div
        style={{ backgroundColor: "#2e4659" }}
        className="sticky-nav-top-margin"
      >
        <div className="row design-centers-footer">
          <div className="col-md-6" style={{ width: "50%" }}>
            <span style={{ fontSize: "15px" }}>VAUGHAN Location</span>
            <br></br>
            <span style={{ fontSize: "13px" }}>45 Tigi Court</span>
          </div>
          <div className="col-md-2" style={{ width: "15%" }}>
            <a
              href="https://www.houzz.com/professionals/design-build-firms/agm-renovations-pfvwus-pf~126163196?"
              target="_blank"
            >
              <img src={Pin} />
            </a>
          </div>
          <div className="col-md-2" style={{ width: "20%" }}>
            <a href="mailto:service@agmrenovations.com">
              <img src={Email} />
            </a>
          </div>
          <div className="col-md-2" style={{ width: "15%" }}>
            <a href="tel:416-477-5429">
              <img src={Phone} />
            </a>
          </div>
        </div>
        <div className="row design-centers-footer">
          <div className="col-md-6" style={{ width: "50%" }}>
            <span style={{ fontSize: "15px" }}>OSHAWA Location</span>
            <br></br>
            <span style={{ fontSize: "13px" }}>1797 William Lott Drive</span>
          </div>
          <div className="col-md-2" style={{ width: "15%" }}>
            <a
              href="https://www.houzz.com/professionals/design-build-firms/agm-renovations-pfvwus-pf~126163196?"
              target="_blank"
            >
              <img src={Pin} />
            </a>
          </div>
          <div className="col-md-2" style={{ width: "20%" }}>
            <a href="mailto:service@agmrenovations.com">
              <img src={Email} />
            </a>
          </div>
          <div className="col-md-2" style={{ width: "15%" }}>
            <a href="tel:416-477-5429">
              <img src={Phone} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignCentersFooter;
