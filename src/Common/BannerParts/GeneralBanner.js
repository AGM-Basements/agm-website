import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
class GeneralBanner extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  };

  state = {
  };

  render() {
    const { title, subTitle } = this.props;
    return (
      <div id="inner-banner">
        <div className="inner-banner-content">
          <div className="container">
            <h1>{title}</h1>
            {subTitle ? (
              <p>{subTitle}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralBanner;
