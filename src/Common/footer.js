import React, { Component, Suspense, lazy } from 'react';
import { Link } from "react-router-dom";
import Image from 'react-image-webp';
import DesignCenter from '../Assets/Images/design-centre.jpg';
import DesignCenterWebP from '../Assets/Images/design-centre.webp';

import RenomarkLogo from '../Assets/Images/renomark_logo.png';
import BildLogo from '../Assets/Images/bildcolor.jpg';
import kidsLogo from '../Assets/Images/360kids.jpg';
import WarrantyLogo from '../Assets/Images/agmwarranty.png';

import RenomarkLogoWebP from '../Assets/Images/renomark_logo.webp';
import BildLogoWebP from '../Assets/Images/bildcolor.webp';
import kidsLogoWebP from '../Assets/Images/360kids.webp';
import WarrantyLogoWebP from '../Assets/Images/agmwarranty.webp';

const SocialMenu = React.lazy(() => import('./FooterParts/SocialMenu'));
const BottomMapVideo = React.lazy(() => import('./FooterParts/BottomMapVideo'));

/* eslint-disable */
class Footer extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <BottomMapVideo />
        </Suspense>

        <div id="agm-design-centre" className="mb-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="section-title">AGM Design Centre</h2>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>
                      </div>
                      <div className="content">
                        <h3>Address</h3>
                        45 Tigi Court<br />
                        Concord, ON<br />
                        Canada L4K 5E4
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
                      </div>
                      <div className="content">
                        <h3>Phone Number</h3>
                        416-477-5429
                      </div>
                    </div>

                    <div className="d-flex mt-3">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>                        
                      </div>
                      <div className="content">
                        <h3>Email</h3>
                        service@agmrenovations.com<br />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/></svg>
                      </div>
                      <div className="content">
                        <h3>Hours</h3>
                        Monday 8 am - 6 pm<br />
                        Tuesday 8 am - 6 pm<br />
                        Wednesday 8 am - 6 pm<br />
                        Thursday 8 am - 6 pm<br />
                        Friday 8 am - 6 pm<br />
                        Saturday 10 am - 4 pm<br />
                        Sunday CLOSED
                  </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <Link to="/estimate" className="btn blue-btn sm mt-3">Contact Us</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <Suspense fallback={<div>Loading...</div>}>
                  <Image
                    src={DesignCenter}
                    webp={DesignCenterWebP}
                    alt="AGM Design Centre"
                  />
                </Suspense>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <div id="concordMap"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="top">
            <div className="container">
              <div className="agm-menu">
                <h4>AGM</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/finished-basements">Finished Basements</Link></li>
                  <li><Link to="/recent-work">Recent Work</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/vote">Vote</Link></li>
                </ul>
              </div>

              <div className="company-menu">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/realtors">Realtors</Link></li>
                  <li><Link to="/warranty-claim-form" target="_blank">Warranty</Link></li>
                  <li><Link to="/catalogue">Catalogue</Link></li>
                  <li><Link to="/financing">Financing</Link></li>
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
                <a href="https://renomark.ca" className="ft-logo" target="_blank">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={RenomarkLogo}
                      webp={RenomarkLogoWebP}
                      alt="Renomark"
                    />
                  </Suspense>
                </a>
                <a href="https://bildgta.ca" className="ft-logo" target="_blank">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={BildLogo}
                      webp={BildLogoWebP}
                      alt="Bild"
                      className="bild-logo"
                    />
                  </Suspense>
                </a>
                <a href="https://www.360kids.ca" target="_blank" className="kid360logo ft-logo">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Image
                      src={kidsLogo}
                      webp={kidsLogoWebP}
                      alt="360 Kids"
                    />
                  </Suspense>
                </a>
                <div className="ft-logo">
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

        <div className="form-processing hidden"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      </>
    );
  }
}

export default Footer;
