import React, { Component } from "react";
import { Helmet } from "react-helmet";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";

class Realtors extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Realtor Lead Submission</title>
        </Helmet>
        <GeneralBanner title="Realtor Lead Submission" />
        <div className="container mt-5 sticky-nav-top-margin">
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#214360",
              fontFamily: "Lato",
              textTransform: "none"
            }}
            className="ml-3 mb-4"
          >
            Submit Potential Client Information
          </h1>
          <iframe
            style={{ width: "100%", border: "none" }}
            src="https://welmond.wufoo.com/embed/w1ak87og0u2hq17/"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </>
    );
  }
}

export default Realtors;
