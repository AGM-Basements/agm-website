import React, { Component, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Image from "react-image-webp";
import HomeBanner2 from "../Common/BannerParts/HomeBanner2";
import MobileHomeBanner from "../Common/BannerParts/MobileHomeBanner";
import Modal from '@material-ui/core/Modal';
import ImageOne from "../Assets/Images/image_1.jpg";
import ImageTwo from "../Assets/Images/bathroom.jpg";
import Slider from "react-slick";

import ImageOneWebP from "../Assets/Images/image_1.webp";
import bestHouz from "../Assets/Images/bestHouz.png";
import BILDLogo from "../Assets/Images/bild-logo-orig.jpeg";
import RenomarkLogo from "../Assets/Images/renomark.svg";
import star from "../Assets/Images/star.png";
import commas from "../Assets/Images/commas.png";
import google from "../Assets/Images/google-reviews.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OurProcess extends Component {
  render() {
    return (
      <div>
        <div className="our-process">
          <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>
            Our Process
          </h2>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <ol>
                <li>
                  <span>1</span> In-Home Consultation
                </li>
                <li>
                  <span>2</span> Design Center Appointment
                </li>
                <li>
                  <span>3</span> Pre-Build Inspection
                </li>
              </ol>
            </div>
            <div className="col-md-6 col-sm-12">
              <ol>
                <li>
                  <span>4</span> Selection Finish
                </li>
                <li>
                  <span>5</span> The Build
                </li>
                <li>
                  <span>6</span> Projection Complete
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="">
          <a
            class="btn red-btn desktop-none"
            href="/our-work"
            style={{
              width: "100%",
              fontWeight: "900",
              fontSize: "1rem",
              display: "block",
              marginTop: "1rem"
            }}
          >
            View our recent work
          </a>
        </div>
        <div class="">
          <a
            class="btn red-btn mobile-none hvr-sweep-to-right"
            href="/our-work"
            style={{
              width: "100%",
              fontWeight: "900",
              fontSize: "1.5rem",
              display: "block",
              marginTop: "1rem"
            }}
          >
            View our recent work
          </a>
        </div>
      </div>
    );
  }
}

class ReviewStars extends Component {
  render() {
    return (
      <div className="row" style={{ margin: "0.01rem" }}>
        <img style={{ height: "10px" }} src={star} />
        <img style={{ height: "10px" }} src={star} />
        <img style={{ height: "10px" }} src={star} />
        <img style={{ height: "10px" }} src={star} />
        <img style={{ height: "10px" }} src={star} />
      </div>
    );
  }
}

class Home extends Component {
  static propTypes = {};

  state = { open: true };

  closeModal = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const settings = {
      className: "center",
      autoplay: true,
      arrows: false,
      slidesToShow: window.screen.width > 600 ? 3 : 1,
      centerMode: true,
      centerPadding: "0px",
      dots: true,
      autoplaySpeed: 5000
    };
    const AGMTestimonials = [
      {
        person: "Ronald L.",
        link:
          "https://www.google.com/maps/contrib/112181701610826035537/reviews",
        text:
          "Top notch work! Courteous & professional staff. Quality products & finishes. Attention to detail. Project started one month late (my bad... I forgot to get a  building permit) and AGM accommodated us by not cashing our post dated cheques until work started up again!! At different stages you are consulted when design / construction / finish changes are needed at critical stages (I have had previous project contractors make unilateral decisions with less than desirable outcomes). The finishing touches make all of the difference... paint touch-ups, small fixes, TV wall bracket installation & TV mounting, new light & electrical outlet in storage room (slightly out-of-scope but done anyway) and additional pipe & shutoff valve for our water filter to name just a few accommodations. You get a professional project manager who answers his cell and emails outside of business hours when you have concerns or questions.  The value of this project was over $50k... worth every penny. I would strongly recommend AGM... they will be a bit more than their competition however their expertise, adhere to to the latest building codes,  tradespeople are second to none."
      },
      {
        person: "Valerie A.",
        link:
          "https://www.google.com/maps/contrib/109797041282582010158/reviews",
        text:
          "We hired AGM to create a small basement suite for our son.  From start to finish it was the best experience.  From the design phase, to the costing, to the actual construction I couldn’t have ask for anything more. Everyone was very very professional and accommodating."
      },
      {
        person: "Andrew M.",
        link:
          "https://www.google.com/maps/contrib/111409753237468327941/reviews",
        text:
          "We recently had our basement finished by AGM. We felt very comfortable throughout the project. Their workers strive to do their best and work diligently! It does show in the final finished basement. Our entire family is in agreement that AGM did a great job not only to meet our expectations but in fact exceeded it! We definitely would recommend AGM to everyone!"
      },
      {
        person: "Srikanth R.",
        link:
          "https://www.google.com/maps/contrib/105734596933682635891/reviews",
        text:
          "AGM is a mark of great workmanship! We are very pleased with our finished basement living space. The process was streamlined and the work progressed from start to finish in a very professional manner! There were no surprises as every aspect of the work was planned at the design stage! We thank all the trades people for their wonderful work in our basement! Keep up the good work!"
      },
      {
        person: "Fazal H",
        link:
          "https://www.google.com/maps/contrib/103488205300508486662/reviews",
        text:
          "We have a very nice basement now! AGM workers did a great job to finish as per our requirements. All the staff and workers were very professional to deal with and we have had an excellent experience dealing with them during the process. Very experienced tradesmen and what a great company to work with! They do care about their clients and go to a great length to make sure the work is completed in a very timely and professional manner. We are very pleased to recommend AGM for basement finishing work to all homeowners who need their basement finished"
      }
    ];
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations</title>
        </Helmet>
        {/* <div className={"mobile-none"}>
          <EmergencyBanner />
        </div> */}
        <div className={"mobile-none"}>
          <HomeBanner2 />
        </div>
        <div className={"desktop-none sticky-nav-top-margin"}>
          <MobileHomeBanner />
        </div>
        <div className="sticky-nav-top-margin mobile-none">
          <h1 className="section-title" style={{ marginTop: "0" }}>
            What our clients say about us
          </h1>
          <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
            <img src={google} style={{ width: "12rem" }} />
          </div>
          <div className="mobile-none">
            <Suspense fallback={<div>Loading...</div>}>
              <div
                id="design-center-slider"
                className="design-center-slider container mb-4"
              >
                <Slider {...settings}>
                  {AGMTestimonials.map((afTestimonial, i) => (
                    <a href={afTestimonial.link}>
                      <div
                        key={"agm-family" + i}
                        className={"agm-family-slider-container review"}
                      >
                        <img
                          src={commas}
                          style={{ width: "1rem", marginBottom: "0.5rem" }}
                        />
                        <span className={"review-text"}>
                          {afTestimonial.text}
                        </span>
                        <span style={{ fontWeight: "bold" }}>
                          {afTestimonial.person}
                        </span>
                        <ReviewStars />
                      </div>
                    </a>
                  ))}
                </Slider>
                <div
                  className="free-consultation-btn"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://www.google.com/search?q=agm+renovations+google+reviews&oq=agm+renovations+google+reviews&aqs=chrome..69i57j0l4j69i60l3.3523j0j4&sourceid=chrome&ie=UTF-8#lrd=0x882b2dd8ee9962bd:0xd03d1da943a37695,1"
                    target="_blank"
                    className="btn light-blue-sq-btn hvr-grow"
                    style={{
                      marginTop: "2.5rem",
                      padding: "20px 30px",
                      fontSize: "12px"
                    }}
                  >
                    More Testimonials
                  </a>
                </div>
              </div>
            </Suspense>
          </div>
          <div className="home-services">
            <div
              style={{
                background:
                  "linear-gradient(89.59deg, #FFFFFF 0%, #F3F3F3 100%, #F3F3F3 100%, #F3F3F3 100%)"
              }}
            >
              <div className="service service-image-left">
                <div className="left">
                  <Image
                    src={ImageOne}
                    webp={ImageOneWebP}
                    alt="Basement Renovation"
                  />
                </div>

                <div className="right">
                  <h2 className="stroke">Basement Renovations</h2>
                  <p>
                    As the first company to specialize exclusively in basement
                    renovation, AGM Basements has listened to customers for over
                    20 years, and has developed a tried and true process focused
                    on you. We’re here to help you realize your dream basement,
                    to make the best decisions for your investment, and for your
                    home and your family.
                  </p>
                  <div className="sub-services">
                    <ul>
                      <li>
                        <Link to="/our-work">
                          Recreation{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Offices{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Fully Functional Living Space{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Sauna and Workout Space{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(89.59deg, #F3F3F3 0%, #FFFFFF 100%, #F3F3F3 100%, #F3F3F3 100%)",
                marginBottom: "1rem"
              }}
            >
              <div className="service service-image-right">
                <div className="left">
                  <img src={ImageTwo} alt="Interior Finishing" />
                </div>

                <div className="right">
                  <h2 className="stroke">Bathroom Renovations</h2>
                  <p>
                    Meet with our design experts to plan the perfect bathroom
                    renovation for your family’s home and get a quote on your
                    project. Working together, we will create a convenient
                    renovation schedule that suits your specific needs and
                    requirements. Our installation experts will get to work
                    making your custom bathroom design a reality, staying on
                    schedule and under budget.
                  </p>
                  <div className="sub-services">
                    <ul>
                      <li>
                        <Link to="/our-work">
                          Vanities{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Custom Showers{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Tiles{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-work">
                          Fixtures{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="get-quote-btn" style={{ marginTop: "3rem" }}>
              <Link to="/estimate" className="btn red-btn-2 hvr-sweep-to-right">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mobile-none home-info-container sticky-nav-top-margin"
          style={{ backgroundColor: "#fff" }}
        >
          <div className={"home-recent-work"} style={{ marginTop: "5rem" }}>
            <div className={"home-warranty-2"}>
              <div className="home-warrany-icon">
                <div />
              </div>
              <p>4 Year</p>
              <span>Basebord to Baseboard Warranty</span>
              <p>Warranty</p>
            </div>
            <div className={"our-process-container-2"}>
              <div className={"our-process-container"}>
                <OurProcess />
              </div>
              <h1>Canada's Highest Rated Basement Renovators</h1>
            </div>
            <div className="container">
              <div className="row" style={{ marginTop: "-6rem" }}>
                <div className="col-md-3"></div>
                <div className="col-md-2" style={{ textAlign: "center" }}>
                  <img src={BILDLogo} style={{ height: "10rem" }} />
                </div>
                <div className="col-md-2" style={{ textAlign: "center" }}>
                  <img src={bestHouz} style={{ height: "10rem" }} />
                </div>
                <div className="col-md-2" style={{ textAlign: "center" }}>
                  <img
                    src={RenomarkLogo}
                    style={{ height: "10rem", backgroundColor: "#fff" }}
                  />
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="desktop-none home-info-container sticky-nav-top-margin">
          <div className="mb-4">
            <h2 style={{ textAlign: "center" }}>
              Canada's Highest Rated Basement Renovators
            </h2>
            <img className="desktop-none best-houz" src={bestHouz} />
            <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
              <img src={google} style={{ width: "8rem" }} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div
                id="design-center-slider"
                className="design-center-slider container mb-4"
              >
                <Slider {...settings}>
                  {AGMTestimonials.map((afTestimonial, i) => (
                    <a href={afTestimonial.link}>
                      <div
                        key={"agm-family" + i}
                        className={"agm-family-slider-container review"}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          {afTestimonial.person}
                        </span>
                        <ReviewStars />
                        <span className={"review-text"}>
                          {afTestimonial.text}
                        </span>
                      </div>
                    </a>
                  ))}
                </Slider>
                <div
                  className="free-consultation-btn"
                  style={{ textAlign: "center" }}
                >
                  <a
                    href="https://www.google.com/search?q=agm+renovations+google+reviews&oq=agm+renovations+google+reviews&aqs=chrome..69i57j0l4j69i60l3.3523j0j4&sourceid=chrome&ie=UTF-8#lrd=0x882b2dd8ee9962bd:0xd03d1da943a37695,1"
                    target="_blank"
                    className="btn light-blue-sq-btn hvr-grow"
                    style={{
                      marginTop: "2.5rem",
                      padding: "10px 15px",
                      fontSize: "10px"
                    }}
                  >
                    See More
                  </a>
                </div>
              </div>
            </Suspense>
          </div>
          <div className="home-info-area">
            <h2>We transform your dreams into reality.</h2>
            <p>
              AGM Basement's renovation experts provide quality basement
              finishing services throughtout the GTA and surrounding areas
            </p>
          </div>
          <div className={"home-recent-work"} style={{ marginBottom: "1rem" }}>
            <div className={"home-warranty"}>
              <div className="home-warrany-icon">
                <div />
              </div>
              <p>4 Year</p>
              <span>Basebord to Baseboard Warranty</span>
              <p>Warranty</p>
            </div>
            <div className={"our-process-container"}>
              <OurProcess />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
