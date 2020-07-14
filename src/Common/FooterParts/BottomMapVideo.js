import React, { Component } from "react";
import MapOgv from "../../Assets/Videos/map.ogv";
import MapWebm from "../../Assets/Videos/map.webm";

/* eslint-disable */
class BottomMapVideo extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div id="bottom-map" className="mobile-none">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "0" }}>
            Our Finished Projects
          </h2>
          <p className="text-center" style={{ marginTop: "0" }}>
            We’ve finished <strong>over 5,000</strong> basements in the GTA and
            counting.
          </p>
          <div className="vimeo-wrapper">
            <div className="video-cover"></div>
            <video width="100%" height="100%" autoPlay loop muted playsInline>
              <source src={MapOgv} type="video/ogv" />
              <source src={MapWebm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomMapVideo;
