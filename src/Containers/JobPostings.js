import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class JobPostings extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Job Postings</title>
        </Helmet>
        <GeneralBanner title="Job Postings" />
        <div className="container mt-5">
          <h2>Careers</h2>
          <p>Thank you for your interest.</p>
          <p>AGM Basements is growing and we are always on the lookout for experienced and talented professionals.</p>
          <p>Whether you are a Trade, an Administrator, A Sales Professional, Or really enjoy the home renovations industry, please send your resume to careers@basementfinishing.ca</p>
        </div>
      </>
    );
  }
}

export default JobPostings;