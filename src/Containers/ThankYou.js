import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";

class ThankYou extends Component {
  static propTypes = {};

  state = {};

  componentDidMount() {
    // removed for test purposes (new version of google tag manager)
    // var google_conversion_id = 952060088;
    // var google_conversion_language = "en";
    // var google_conversion_format = "3";
    // var google_conversion_color = "ffffff";
    // var google_conversion_label = "LofTCPj79msQuJH9xQM";
    // var google_remarketing_only = false;
  }

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Thank You</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-952060088"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-952060088');
              gtag('event', 'conversion', {'send_to': 'AW-952060088/LofTCPj79msQuJH9xQM'});
            `}
          </script>
        </Helmet>
        <GeneralBanner title="Thank You" />
        <div id="thank-you-page">
          <div className="container">
            <div className="thank-you">
              <h5>
                Your form has been sent successfully, We will contact you soon.
              </h5>

              <div className="finance-it-banner">
                <h4>
                  Save your <span>money</span>
                </h4>
                <p>Make easy monthly payments on your project.</p>
                <p>Get pre-qualified today with Financeit.</p>
                <Link to="/financeit">Apply here</Link>
              </div>
            </div>
          </div>
          <div style={{ display: "inline" }}>
            <img
              height="1"
              width="1"
              style={{ borderStyle: "none" }}
              alt=""
              src="//www.googleadservices.com/pagead/conversion/952060088/?label=LofTCPj79msQuJH9xQM&amp;guid=ON&amp;script=0"
            />
          </div>
        </div>
      </>
    );
  }
}

export default ThankYou;
