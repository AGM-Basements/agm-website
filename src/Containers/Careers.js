import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class Careers extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Careers</title>
        </Helmet>
        <GeneralBanner title="Careers" />
        <div className="finished">
          <div className="container">
            <h2>A perfect place for someone just like you.</h2>
            <p>What makes a workplace feel like home? It’s a place that brings out your best, every day. Because it makes you want to be better, every day. It’s a place where your strengths are appreciated. Where people welcome you as you are. And applaud you for where you’re going. We invite you to search and apply for jobs at AGM Renovations—and discover opportunities to explore whatever inspires you.</p>
            <div>
              <div className="block-b first ">
                <div className="block-hover right-arrow-icon">
                  <h2><span style={{ color: '#ffffff' }}><Link style={{ color: '#ffffff' }} to="/jobs-posting">Explore career Paths</Link></span></h2>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"/></svg><strong> Building a career at AGM Renovations</strong></p>
                </div>
              </div>
              <div className="block-b first second">
                <div className="block-hover right-arrow-icon">
                  <h2><span style={{ color: '#ffffff' }}><Link style={{ color: '#ffffff' }} to="/why-us">Why AGM</Link></span></h2>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"/></svg><strong> Why people love working here.</strong></p>
                </div>
              </div>
              <div className="block-b first third">
                <div className="block-hover right-arrow-icon">
                  <h2><span style={{ color: '#ffffff' }}><Link style={{ color: '#ffffff' }} to="/contact-us">Connect With Us</Link></span></h2>
                  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"/></svg><strong> Chat, engage, and follow our news.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Careers;