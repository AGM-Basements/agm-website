import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { isWebpSupported } from "react-image-webp/dist/utils";
import HomeBannerImage from "../../Assets/Images/DSC1073.jpg";
import HomeBannerImageWebP from "../../Assets/Images/DSC1073.webp";

/* eslint-disable */
class BathroomEstimateBanner extends Component {
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
              <h1>The Best in Bathroom Renovations</h1>
              <div className="text-desktop">
                <p>
                  Our team of accredited Interior Designers and Licensed
                  Building Professionals are ready to make your vision a
                  reality. We would be honoured to have you choose AGM Basements
                  for your basement renovation project. All estimates are free
                  of charge.
                </p>
              </div>
              <h3 className="text-white">
                Contact Us Now For A Free Estimate.
              </h3>
            </div>

            <div className="right">
              <div className="contact-form">
                <h3>Get your free quote</h3>
                <div className="form">
                  <form onSubmit={this.handleSubmit} id="estimateform">
                    <div className="estimate-inputs">
                      <div className="input-holder full-name">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z" />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z" />
                        </svg>
                        <input
                          type="tel"
                          required
                          className="phone_number"
                          name="phoneNumber"
                          placeholder="Mobile Phone Number"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>

                      <div className="input-holder city">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z" />
                        </svg>
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" />
                        </svg>
                        <input
                          type="email"
                          required
                          className="email"
                          name="email"
                          placeholder="E-mail Address"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>

                      <div className="input-holder size-of-house">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path d="M635.7 165.8L556.1 27.9C550.2 17.7 539.5 12 528.5 12c-5.4 0-10.9 1.4-15.9 4.3L15.9 302.8C.7 311.5-4.5 331 4.3 346.2L83.9 484c5.9 10.2 16.6 15.9 27.6 15.9 5.4 0 10.9-1.4 15.9-4.3L624 209.1c15.3-8.6 20.5-28.1 11.7-43.3zM111.5 468.2L31.9 330.3l69-39.8 43.8 75.8c2.2 3.8 7.1 5.1 10.9 2.9l13.8-8c3.8-2.2 5.1-7.1 2.9-10.9l-43.8-75.8 55.2-31.8 27.9 48.2c2.2 3.8 7.1 5.1 10.9 2.9l13.8-8c3.8-2.2 5.1-7.1 2.9-10.9l-27.9-48.2 55.2-31.8 43.8 75.8c2.2 3.8 7.1 5.1 10.9 2.9l13.8-8c3.8-2.2 5.1-7.1 2.9-10.9L294 179.1l55.2-31.8 27.9 48.2c2.2 3.8 7.1 5.1 10.9 2.9l13.8-8c3.8-2.2 5.1-7.1 2.9-10.9l-27.9-48.2L432 99.5l43.8 75.8c2.2 3.8 7.1 5.1 10.9 2.9l13.8-8c3.8-2.2 5.1-7.1 2.9-10.9l-43.8-75.8 69-39.8 79.6 137.8-496.7 286.7z" />
                        </svg>
                        <input
                          type="number"
                          required
                          className="sqFt"
                          name="sqFt"
                          placeholder="Size of House (sq/ft)"
                          onChange={this.updateEstimateFormData}
                        />
                        <div className="error-message"></div>
                      </div>
                    </div>

                    <div className="submit-btn">
                      <button className="estimate-form-submit" type="submit">
                        Schedule Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(BathroomEstimateBanner);
