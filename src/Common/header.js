import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import $ from "jquery";

import Logo from "../Assets/Images/logo.svg";
import Phone from "../Assets/Images/phone.svg";
import gold_banner from "../Assets/Images/new-gold-banner.png";

// const SocialMenu = React.lazy(() => import("./FooterParts/SocialMenu"));
const SocialMenuMobile = React.lazy(() =>
  import("./FooterParts/SocialMenuMobile")
);

/* eslint-disable */
class Header extends Component {
  static propTypes = {};

  state = {
    menuOpen: false,
    viewStickyQuoteButton: false,
    headerHeight: 0
  };

  componentDidMount() {
    this.checkHeaderHeight();
    window.addEventListener("resize", this.checkHeaderHeight);

    // Storing source in session for later use
    let vars = {};
    const parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );

    if ("agmsource" in vars) {
      sessionStorage.setItem("agmsource", vars.agmsource);
    }

    document.addEventListener("scroll", () => {
      let isVisible = window.scrollY < 50 ? false : true;
      this.setState({ viewStickyQuoteButton: isVisible });
      try {
        document.getElementsByClassName(
          "home-banner-button-mobile"
        )[0].style.display = isVisible ? "none" : "block";
      } catch (e) {
        console.log("e", e);
      }
    });
    window.scrollTo(0, 0)
  }

  checkHeaderHeight = () => {
    const headerHeight = this.headerEL.clientHeight;
    if (headerHeight === 0) {
      setTimeout(() => {
        this.checkHeaderHeight();
      }, 1000);
    } else {
      this.setState({ headerHeight });
    }
  };

  mobileMenuClick = isvisible => {
    this.setState({
      menuOpen: isvisible === false ? false : !this.state.menuOpen
    });
  };

  render() {
    const { props } = this.props;

    let phHTML = (
      <span>
        <a href="tel:416-477-5429">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z" />
          </svg>
          <span className="call-text"> Call Us: (416) 477-5429</span>
        </a>
      </span>
    );
    return (
      <>
        <Helmet>
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
                    `}
          </script>
          <script>
            {`
                        window.addEventListener('load', function(){
                            window.addEventListener('click', function(e){
                                if(e.target.matches('[href="tel:416-477-5429"]')){
                                    gtag('event', 'conversion', {'send_to': 'AW-952060088/EVffCNfIgMQBELiR_cUD'});
                                }
                            })
                        });
                    `}
          </script>
        </Helmet>
        <section
          id="main-header"
          ref={headerEL => {
            this.headerEL = headerEL;
          }}
        >
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="AGM Logo" />
            </Link>
          </div>
          <div className="gold_banner hvr-curl-top-left">
            <Link to="/">
              <img src={gold_banner} alt="" />
            </Link>
          </div>
          <div className="main-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.mobileMenuClick}
              className="mobile-menu-icon"
              viewBox="0 0 448 512"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
            <div className="header-call-us mobile-none"> {phHTML} </div>
            <div className="logo-2">
              <Link to="/">
                <img src={Logo} alt="AGM Logo" />
              </Link>
            </div>
            <ul className={this.state.menuOpen ? "open" : null}>
              <div
                className="close-menu display-mobile desktop-none"
                onClick={this.mobileMenuClick}
              >
                <span>X</span>
              </div>
              <li className="shift">
                <ol>
                  <li className="desktop-none">
                    <Link
                      to="/"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Home
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link
                      to="/the-agm-difference"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Our Process
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link
                      to="/our-clients"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Our Clients
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link
                      to="/financing"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Financing
                    </Link>
                  </li>
                  <hr></hr>
                  <li className="mobile-none">
                    <Link
                      to="/our-work"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Our Work
                    </Link>
                  </li>
                  <hr className="mobile-none"></hr>
                  <li className="desktop-none">
                    <Link
                      to="/our-work"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Our Work
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <Link
                      to="/contact-us"
                      onClick={this.mobileMenuClick.bind(this, false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ol>
                <div className="desktop-none button-mobile display-mobile quote-container">
                  <Link
                    to="/estimate"
                    className="btn red-btn"
                    onClick={this.mobileMenuClick.bind(this, false)}
                  >
                    GET A FREE QUOTE!
                  </Link>
                </div>
                <div className="desktop-none">
                  <SocialMenuMobile />
                </div>
              </li>
            </ul>
            <div className="header-call-us desktop-none">
              <div className={"header-call-us-container"}>
                <a href="tel:416-477-5429">
                  <img src={Phone} alt="AGM Logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="free-consultation-btn hvr-grow">
            <Link to="/estimate" className="btn light-blue-sq-btn">
              Free Consultation
            </Link>
          </div>
        </section>
        <div
          className="mobile-none"
          style={{
            display: "block",
            position: "relative",
            // top: "120px",
            left: 0,
            right: 0,
            zIndex: 999
          }}
        >
          <Link
            to="/bathroom-estimate"
            className="btn red-btn-d slide-in-right"
            style={{
              margin: "0",
              float: "right"
            }}
          >
            <span className="hover-text hover">
              Now..we do bathroom renovations too!
            </span>
          </Link>
        </div>
        <div
          className={"iPad-display"}
          style={{ height: this.state.headerHeight }}
        ></div>
        <div
          className={"button-mobile display-mobile"}
          style={{
            position: "fixed",
            top: "75px",
            left: 0,
            right: 0,
            zIndex: 998
          }}
        >
          <div
            id="white-banner-text"
            className={"national-homeshow slide-in-right"}
          >
            <span className="glow">SPRING CLEAN UP: Book before May 15th and get $5,000 OFF </span>
          </div>
        </div>
        <div
          className="button-mobile display-mobile"
          style={{
            position: "fixed",
            top: "98px",
            left: 0,
            right: "-30px",
            zIndex: 99
          }}
        >
          <Link
            to="/bathroom-estimate"
            className="btn green-btn slide-in-right hover"
            style={{
              margin: "0",
              float: "right"
            }}
          >
            Now..we do bathroom renovations too!
          </Link>
        </div>
        <div
          className={
            "button-mobile display-mobile " +
            (this.state.viewStickyQuoteButton ? "" : "sticky-quote-container")
          }
          style={{
            position: "fixed",
            top: "100px",
            left: 0,
            right: 0,
            zIndex: 999
          }}
        >
          <Link
            to="/estimate"
            className="btn red-btn"
            style={{
              width: "100%"
            }}
          >
            Get a Free Quote!
          </Link>
        </div>
        <div
          className={
            "button-mobile display-mobile " +
            (this.state.viewStickyQuoteButton ? "" : "sticky-quote-container")
          }
          style={{
            position: "fixed",
            top: "151px",
            left: 0,
            right: "-30px",
            zIndex: 999
          }}
        >
          <Link
            to="/bathroom-estimate"
            className="btn green-btn slide-in-right hover"
            style={{
              margin: "0",
              float: "right"
            }}
          >
            Now..we do bathroom renovations too!
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
