import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Logo from '../Assets/Images/logo.svg';

/* eslint-disable */
class Header extends Component {
  static propTypes = {
  };

  state = {
    menuOpen: false,
  };

  componentDidMount() {
    // Storing source in session for later use
    let vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
      vars[key] = value;
    });

    if ('agmsource' in vars) {
      sessionStorage.setItem("agmsource", vars.agmsource);
    }
  }

  mobileMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  render() {
    const { props } = this.props;
    console.log('props', props);
    return (
      <section id="main-header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="AGM Logo" />
          </Link>
        </div>

        <div className="main-nav">
          <div className="header-call-us">
            <span><a href="tel:416-477-5429"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"/></svg> Call Us: (416) 477-5429</a></span>
          </div>
          <ul className={this.state.menuOpen ? 'open' : null}>
            <li><Link to="/the-agm-difference">The AGM Difference</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/our-clients">Our Clients</Link></li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={this.mobileMenuClick} className="mobile-menu-icon" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
        </div>

        <div className="free-consultation-btn">
          <Link to="/estimate" className="btn light-blue-btn">Free Consultation</Link>
        </div>
      </section>
    );
  }
}

export default Header;
