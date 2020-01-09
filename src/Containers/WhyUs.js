import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class WhyUs extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Why Us</title>
        </Helmet>
        <GeneralBanner title="Why Us" />
        <div className="container mt-5">
          <h2>AGM Renovations, So much more than a job</h2>
          <p>Are you looking for a job that is more than just a job? Do you want to look forward to going to work each day? Are you a hard worker with a positive attitude and a strong sense of responsibility? Do you want to work for a company that cares about you and wants you to be successful?</p>

          <p>If you have answered “yes” to these questions, AGM Renovations wants to talk to you! We are actively seeking people with skills in a wide variety of areas, who can work with us on a full-time or contract basis.</p>

          <p>What we are looking for:</p>
          <ul>
            <li>Skilled tradesmen who can be a part of creating the superb finished basements that our reputation is based on</li>
            <li>“Behind the scenes” administrative staff who can ensure that business runs smoothly and effectively</li>
            <li>Friendly, approachable customer service staff who can answer questions and ensure that our customers are happy</li>
          </ul>

          <p>The qualities we value most:</p>
          <ul>
            <li>A solid work ethic</li>
            <li>The ability to work individually and as part of a team</li>
            <li>The resourcefulness to seek solutions to problems or better ways of doing things</li>
            <li>A high level of positive energy</li>
            <li>A habit of showing up on time and following through with commitments</li>
          </ul>

          <p>What we offer to committed, hard-working staff:</p>
          <ul>
            <li>Fair compensation</li>
            <li>Increased responsibility for those who prove themselves</li>
            <li>A positive working environment that you will want to go to every day</li>
            <li>Opportunities for learn new skills or upgrade existing ones</li>
            <li>Opportunities for advancement</li>
          </ul>

          <p>We are not just any employer. We treat our staff with respect and we reward hard work and dedication.</p>

          <p>To find out how to become a part of our team, call us at or email to discuss this unique opportunity.</p>
        </div>
      </>
    );
  }
}

export default WhyUs;