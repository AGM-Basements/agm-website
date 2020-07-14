import React, { Component, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Image from "react-image-webp";
import Slider from "react-slick";
import DesignCenter from "../Assets/Images/design-centre.jpg";
import DesignCenterWebP from "../Assets/Images/design-centre.webp";
import Bathroom from "../Assets/DesignCenterSlider/Bathroom.png";
import Cabinetry from "../Assets/DesignCenterSlider/Cabinetry.png";
import Flooring from "../Assets/DesignCenterSlider/Flooring.png";
import WineCellar from "../Assets/DesignCenterSlider/WineCellar.png";

import RenomarkLogo from "../Assets/Images/renomark.svg";
import BildLogo from "../Assets/Images/bild.svg";
import kidsLogo from "../Assets/Images/360kids.jpg";
import WarrantyLogo from "../Assets/Images/agmwarranty.png";
import DesignCenterImg from "../Assets/Images/design_center.png";

import RenomarkLogoWebP from "../Assets/Images/renomark_logo.webp";
import BildLogoWebP from "../Assets/Images/bildcolor.webp";
import kidsLogoWebP from "../Assets/Images/360kids.webp";
import WarrantyLogoWebP from "../Assets/Images/agmwarranty.webp";

import agm360 from "../Assets/Images/agm360.jpg";

import LazyLoad from 'react-lazyload';

const SocialMenu = React.lazy(() => import("./FooterParts/SocialMenu"));
const SocialMenuMobile = React.lazy(() =>
  import("./FooterParts/SocialMenuMobile")
);
const DesignCentersFooter = React.lazy(() =>
  import("./FooterParts/DesignCentersFooter")
);
const BottomMapVideo = React.lazy(() => import("./FooterParts/BottomMapVideo"));

/* eslint-disable */
class Footer extends Component {
  static propTypes = {};

  state = {};

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const dcImages = [
      {
        keyId: 0,
        src: DesignCenterWebP
      },
      {
        keyId: 1,
        src: Bathroom
      },
      {
        keyId: 2,
        src: Cabinetry
      },
      {
        keyId: 3,
        src: Flooring
      },
      {
        keyId: 4,
        src: WineCellar
      }
    ];

    return (
      <>
        <LazyLoad once>
          <Suspense fallback={<div>Loading...</div>}>
            <BottomMapVideo />
          </Suspense>
        </LazyLoad>
        <div id="agm-design-centre" className="mb-5 mobile-none">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="section-title" style={{ marginBottom: "0" }}>
                  AGM Design Centre
                </h2>
                <h3>
                  AGM is the only company in the industry that has a design
                  centre. Our professional designer will help you visualize your
                  finished basement with a 3D rendering and recommend paint
                  colors, flooring materials, tiles, cabinetry, and other luxury
                  finishes.
                </h3>
              </div>
            </div>
            <div className="row justify-content-center"></div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h3>Vaughan Location</h3>
                        45 Tigi Court
                        <br />
                        Concord, ON
                        <br />
                        Canada L4K 5E4
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h3>Oshawa Location</h3>
                        1797 William Lott Dr
                        <br />
                        Oshawa, ON
                        <br />
                        Canada L1H 7K5
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h3>Phone Number</h3>
                        416-477-5429
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h3>Email</h3>
                        service@agmrenovations.com
                        <br />
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 192 512"
                        >
                          <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z" />
                        </svg>
                      </div>
                      <div className="content">
                        <h3>Hours</h3>
                        <b>Monday - Friday</b>
                        <br />
                        8 am - 6 pm
                        <br />
                        <br />
                        <b>Saturday</b>
                        <br />
                        10 am - 4 pm
                        <br />
                        <br />
                        <b>Sunday</b>
                        <br />
                        By Appointment
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col">
                    <Link to="/estimate" className="btn blue-btn sm mt-3">
                      Contact Us
                    </Link>
                  </div>
                </div> */}
              </div>

              <div className="col-md-6">
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                <div id="design-center-slider">
                  {/* <Slider {...settings}>
                      {dcImages.map(dcImage => (
                        <div key={dcImage.keyId}> */}
                  <img src={DesignCenterImg} />
                  {/* </div> */}
                  {/* ))} */}
                  {/* </Slider> */}
                </div>
                {/* </Suspense> */}
              </div>
            </div>

            <div className="row justify-content-center mobile-none">
              <h1 style={{ marginBottom: "0", marginTop: "2rem" }}>
                AGM's commitment to 360&#176; Kids
              </h1>
            </div>
            <div className="row mt-4 mobile-none">
              <div className="col-md-6">
                <p>
                  Book an appointment at one of our design centres to sit down
                  with our designer to create your dream basement and receive
                  your design and a detailed quote on the spot.
                </p>
                <p>
                  AGM Renovations has proudly partnered up with 360 kids to help
                  children in need today to have an opportunity to become the
                  homeowners of tomorrow. AGM will contribute a portion of
                  deposits made for service or design appointments that are
                  cancelled to{" "}
                  <a href="https://www.360kids.ca" target="_blank">
                    360&#176; Kids
                  </a>{" "}
                  to help a child in need.
                </p>
              </div>

              <div className="col-md-6">
                <img src={agm360} />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div id="concordMap"></div>
              </div>
            </div>
          </div>
        </div>
        <DesignCentersFooter />
        <SocialMenuMobile />
        <div id="footer" className="sticky-nav-top-margin">
          <div className="top">
            <div className="container row">
              <div className="agm-menu col-md-6">
                <h4>AGM</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/finished-basements">Finished Basements</Link>
                  </li>
                  <li>
                    <Link to="/our-work">Recent Work</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/vote">Vote</Link>
                  </li>
                </ul>
              </div>

              <div className="company-menu col-md-6">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/realtors">Realtors</Link>
                  </li>
                  <li>
                    <Link to="/warranty" target="_blank">
                      Warranty
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalogue">Catalogue</Link>
                  </li>
                  <li>
                    <Link to="/financing">Financing</Link>
                  </li>
                  <li>
                    <Link to="/payment-receipt-150" target="_blank">
                      Home Payment
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-receipt-250" target="_blank">
                      DCA Payment
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment-receipt-350" target="_blank">
                      Warranty Payment
                    </Link>
                  </li>
                </ul>
              </div>

              <Suspense fallback={<div>Loading...</div>}>
                <SocialMenu />
              </Suspense>
            </div>
          </div>

          <div className="ft-logos">
            <div className="container">
              <div className="bottom-logos">
                <a
                  href="https://renomark.ca"
                  className="ft-logo"
                  target="_blank"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={RenomarkLogo}
                      webp={RenomarkLogoWebP}
                      alt="Renomark"
                    />
                  </Suspense>
                </a>
                <a
                  href="https://bildgta.ca"
                  className="ft-logo"
                  target="_blank"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={BildLogo}
                      webp={BildLogoWebP}
                      alt="Bild"
                      className="bild-logo"
                    />
                  </Suspense>
                </a>
                <a
                  href="https://www.360kids.ca"
                  target="_blank"
                  className="kid360logo ft-logo"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image src={kidsLogo} webp={kidsLogoWebP} alt="360 Kids" />
                  </Suspense>
                </a>
                <div className="ft-logo mobile-none">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={WarrantyLogo}
                      webp={WarrantyLogoWebP}
                      alt="AGM Warranty"
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="container">
              <div className="items">
                <div className="finance-footer">
                  <p>AGM Basements AGM &copy; 2020 All rights reserved</p>
                </div>
                <p>ECRA/ESA Licence# 7012533</p>
              </div>
            </div>
          </div>
        </div>
        <div className="upload_progress hidden">
          <div className="progress-bar">
            <div className="current-progress"></div>
          </div>
        </div>

        <div className="form-processing hidden">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
