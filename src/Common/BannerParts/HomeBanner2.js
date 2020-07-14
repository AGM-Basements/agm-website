import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { isWebpSupported } from "react-image-webp/dist/utils";
import HomeBannerImage from "../../Assets/Images/DSC1073.jpg";
import HomeBannerImageWebP from "../../Assets/Images/DSC1073.webp";
import { Link } from "react-router-dom";
import AnnaHarrisImage from "../../Assets/Images/anna-harris.png";

/* eslint-disable */
class EstimateHeader extends Component {
  static propTypes = {};

  state = {
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    sqFt: null
  };

  updateEstimateFormData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const source = sessionStorage.getItem("agmsource");
    let postURL = "https://hooks.zapier.com/hooks/catch/2915270/ounllbg/";

    const formData = {
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      city: this.state.city,
      sqFt: this.state.sqFt
    };

    if (source === "fb") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/oune6l6/";
    } else if (source === "ig") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/ounedl9/";
    } else if (source === "gda") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/oune16l/";
    } else if (source === "gsa") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/oune9bt/";
    } else if (source === "ym") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/ouner2t/";
    } else if (source === "rg") {
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/ouneiw1/";
    } else {
      // Back to default just incase another source gets passed
      // Most likely isnt needed but just in case
      postURL = "https://hooks.zapier.com/hooks/catch/2915270/ounllbg/";
    }

    // axios.post(postURL, formData).then((res) => {
    //   console.log('RES', res);
    // }).catch((res) => { });

    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      const res = JSON.parse(xhr.responseText);
      console.log("RES", res);
      if (res.status === "success") {
        this.props.history.push("thank-you");
      }
    });
    // open the request with the verb and the url
    xhr.open("POST", postURL);
    // send the request
    xhr.send(JSON.stringify(formData));
  };

  render() {
    return (
      <section
        id="home-banner"
        className="estimate-header-contain"
        style={{
          backgroundImage: `url(${
            isWebpSupported() ? HomeBannerImageWebP : HomeBannerImage
          })`
        }}
      >
        <div className="banner-cover">
          <div className="banner-content estimate d-flex align-items-center">
            <div className="left">
              <h1>The Best in Renovations</h1>
              <div className="contact-form-2">
                <h3>Get a free quote</h3>
                <div className="form">
                  <form onSubmit={this.handleSubmit} id="estimateform">
                    <div className="estimate-inputs">
                      <div className="input-holder full-name">
                        <input
                          type="text"
                          required
                          className="full_name"
                          name="fullName"
                          placeholder="Full Name"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>

                      <div className="input-holder phone-number">
                        <input
                          type="tel"
                          required
                          className="phone_number"
                          name="phoneNumber"
                          placeholder="Mobile Phone"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>

                      <div className="input-holder city">
                        <input
                          type="text"
                          required
                          className="city"
                          name="city"
                          placeholder="City"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>

                      <div className="input-holder email">
                        <input
                          type="email"
                          required
                          className="email"
                          name="email"
                          placeholder="Email"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>
                      <div className="submit-btn">
                        <button
                          className="estimate-form-submit hvr-sweep-to-right"
                          type="submit"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <div className="right"> */}
            <div className="bottom-banner"></div>
            <p className="bottom-banner-text">
              Welcome to AGM Renovations, your basement and bathroom
              professionals!
            </p>
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(EstimateHeader);
