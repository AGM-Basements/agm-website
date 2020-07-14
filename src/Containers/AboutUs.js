import React, { Component, Suspense } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";
import { Link } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AGMTeamBBQ2016 from "../Assets/Images/AGM-Team-BBQ-2016-600x350.jpg";
import ChristmasInOffice from "../Assets/Images/ChristmasInOffice.jpg";
import AGMBBQ2017 from "../Assets/Images/AGMBBQ2017.jpg";
import HollywoodChristmas2016 from "../Assets/Images/HollywoodChristmas2016.jpg";
import core_value from "../Assets/Images/core_value.jpg";
import vision from "../Assets/Images/vision.png";

class AboutUs extends Component {
    static propTypes = {};

    state = {};

    render() {
        const settings = {
            autoplay: true,
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '20px'
        };
        const AGMFamilyImages = [
            {
                link: "/our-team/agm-renovations-bbq-event-summer-2016/",
                text: "AGM Renovations BBQ Summer 2016",
                title: "agm-team-bbq-2016",
                src: AGMTeamBBQ2016
            },
            {
                link: "/our-team/agm-renovations-christmas-in-the-office-2016/",
                text: "AGM Christmas In The Office 2016",
                title: "20161223_143235",
                src: ChristmasInOffice
            },
            {
                link: "/our-team/agm-renovations-bbq-event-summer-2017/",
                text: "AGM Renovations BBQ Summer 2017",
                title: "AGM-BBQ_121",
                src: AGMBBQ2017
            },
            {
                link: "/our-team/agm-hollywood-christmas-party-2016/",
                text: "AGM-Hollywood Christmas Party 2016",
                title: "AGM2017_006",
                src: HollywoodChristmas2016
            }
        ];
        return (
        <>
            <Helmet>
            <title>AGM Basements | Basement Renovations | About Us</title>
            </Helmet>
            <h1 className="desktop-none text-center sticky-nav-top-margin">ABOUT AGM</h1>
            <div className="desktop-none">
                <GeneralBanner title='' subTitle="Our mission is to ensure exceptional service at competitive prices" />
            </div>
            <div className="mobile-none">
                <GeneralBanner title="About Us" />
            </div>
            <div className="container sticky-nav-top-margin">
                <h1 className="mobile-none">About AGM Basement Renovations</h1>
                <h3 className="mobile-none">
                    Our mission is to ensure exceptional service at competitive prices
                </h3>
                <p className="content">
                    AGM Renovations experts provide quality basement finishing services
                    throughout the GTA and the surrounding area. See our Service
                    Area for the complete list of towns where our basement renovations
                    services are offered. We offer 100% satisfaction guarantee on our
                    workmanship and offer competitive prices with exceptional quality.
                    We believe that our low pricing should not mean clients need to
                    expect lower quality, so expect more and when you need the best;
                    trust AGM Renovations. We guarantee that you will be completely
                    satisfied, which means that you don’t make a final payment pay until
                    the job is done. When you need the best; trust only the best at AGM
                    Renovations. Our mission is to be committed to excel in the work we
                    do. We are committed to excel and maintain a sense of pride in our
                    all we do!
                </p>
            </div>
            <div className="container about-container sticky-nav-top-margin">
                <div className="about-container-wrapper desktop-none">
                    <div className="about-icon-container"></div>
                    <div className="about-container-wrapper-header">
                        <h2>Core Values</h2>
                    </div>
                    <div className="about-container-wrapper-body">
                        <ul>
                            <li>We strive to be the best at what we do</li>
                            <li>We play as a team</li>
                            <li>We are unafraid to admit mistakes</li>
                            <li>We listen, we service, because we care</li>
                            <li>We are passionate about what we do</li>
                            <li>We do whatever it takes to deliver on our promises</li>
                            <li>We always deliver on time</li>
                        </ul>
                    </div>
                </div>
                <div className="about-container-wrapper desktop-none mb-0">
                    <div className="about-icon-container eye"></div>
                    <div className="about-container-wrapper-header">
                        <h2>Our Vision</h2>
                        <span>Is that every space we create is one of a kind uniquely tailored for each client</span>
                    </div>
                    <div className="about-container-wrapper-body">
                        <h2>We Believe</h2>
                        <ul>
                            <li>In the power of patience, hard work and perseverance</li>
                            <li>By using checklist, we never make the same mistake twice</li>
                            <li>The job we do is a reflection of who we are</li>
                            <li>Whatever happen, there is always a solution</li>
                            <li>It takes true character to accept responsibility for a mistake</li>
                            <li>The customer has the obligation to complain, it is how we improve</li>
                            <li>We need to deliver on time and on budget to have happy customers</li>
                            <li>A promise made, is a promise kept</li>
                            <li>Small details matter. If a customer says "Don't worry about it, we absolutely worry about it"</li>
                        </ul>
                    </div>
                </div>
                <div className="row mobile-none">
                    <div className="col-md-6 text-center">
                        <img
                            src={core_value}
                            width="600"
                            height="350"
                            alt="Agm Core Values"
                        />
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={vision} width="600" height="350" alt="Agm Vision" />
                    </div>
                </div>
            </div>
            <div className="desktop-none container sticky-nav-top-margin mb-4 pt-4">
                <h2 style={{ textAlign: "center" }}>THE AGM FAMILY</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <div id="design-center-slider" className="design-center-slider">
                        <Slider {...settings}>
                            {AGMFamilyImages.map((afImage, i) => (
                                <div key={'agm-family'+i} className={'agm-family-slider-container'}>
                                    <Link to={afImage.link}>
                                        <img src={afImage.src} alt={afImage.src} title={afImage.title} />
                                        <span>{afImage.text}</span>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Suspense>
            </div>
            <div className="mobile-none container sticky-nav-top-margin">
                <h2 style={{ textAlign: "center" }}>THE AGM FAMILY</h2>
                <div className="text-center heart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h2 className="wpb_heading wpb_singleimage_heading">
                            AGM Renovations BBQ Summer 2016
                        </h2>
                        <Link to="/our-team/agm-renovations-bbq-event-summer-2016/">
                            <img
                            src={AGMTeamBBQ2016}
                            width="600"
                            height="350"
                            alt="Agm Team"
                            title="agm-team-bbq-2016"
                            />
                        </Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2 className="wpb_heading wpb_singleimage_heading">
                            AGM Christmas In The Office 2016
                        </h2>
                        <Link
                            to="/our-team/agm-renovations-christmas-in-the-office-2016/"
                            target="_self"
                            className="vc_single_image-wrapper vc_box_border  vc_box_border_grey"
                        >
                            <img
                                className="vc_single_image-img lazy loaded"
                                src={ChristmasInOffice}
                                width="600"
                                height="350"
                                alt="AGM Christmas In The Office 2016"
                                title="20161223_143235"
                            />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h2 className="wpb_heading wpb_singleimage_heading">
                            AGM Renovations BBQ Summer 2017
                        </h2>
                        <Link
                            to="/our-team/agm-renovations-bbq-event-summer-2017/"
                            target="_self"
                            className="vc_single_image-wrapper vc_box_border  vc_box_border_grey"
                        >
                            <img
                            className="vc_single_image-img lazy loaded"
                            src={AGMBBQ2017}
                            width="600"
                            height="350"
                            alt="AGM Renovations BBQ Summer 2017"
                            title="AGM-BBQ_121"
                            />
                        </Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2 className="wpb_heading wpb_singleimage_heading">
                            AGM-Hollywood Christmas Party 2016
                        </h2>
                        <Link
                            to="/our-team/agm-hollywood-christmas-party-2016/"
                            target="_self"
                            className="vc_single_image-wrapper vc_box_border  vc_box_border_grey"
                        >
                            <img
                            className="vc_single_image-img lazy loaded"
                            src={HollywoodChristmas2016}
                            width="600"
                            height="350"
                            alt="AGM-Hollywood Christmas Party 2016"
                            title="AGM2017_006"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default AboutUs;
