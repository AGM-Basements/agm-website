import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class FieldSaleRepresentative extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Field Sale Representative</title>
        </Helmet>
        <GeneralBanner title="Field Sale Representative" />
        <div className="container mt-5">
          <h2>Field Sale Representative</h2>
          <p>A fast growing home renovations company specializing in basement renovations is seeking a motivated sales individual to join our team as a Field Sales Representative. We are looking for someone who has the confidence, positive attitude, teamwork, motivation and willingness to learn and grow with the company. This role will have a territory across the GTA and training will be provided. As a company, we are dedicated to helping our employees’ realize and fulfill their full Potential.</p>

          <h3>Position Responsibilities:</h3>
          <ul>
            <li>Secure sales leads using various sales methods (door to door, cold calling, presentations and open houses)</li>
            <li>Forecast leads, develop “out of the box” strategies/models and evaluate their effectiveness</li>
            <li>Evaluate customers’ needs and build productive long lasting relationships</li>
            <li>Achieve personal and team sales targets</li>
            <li>Research accounts/clients and generate or follow through on sales leads</li>
            <li>Attend meetings, sales events and trainings to keep abreast of the latest developments</li>
            <li>Report and provide feedback to management using financial statistical data</li>
            <li>Maintain and expand client database within your assigned territory</li>
          </ul>

          <h3>Qualifications Include:</h3>
          <ul>
            <li>High school, Business Administration degree or diploma or equivalent previous working experience an asset</li>
            <li>Proven sales experience</li>
            <li>Track record of over achieving quotas</li>
            <li>Familiarity with different sales techniques and pipeline management</li>
            <li>Exceptional written and verbal communication skills</li>
            <li>Strong communication, negotiation and interpersonal skills.</li>
            <li>Intermediate to Advanced computer skills are required, working knowledge of Google platform, CRM systems</li>
            <li>Proven ability to possess time management, problem solving and organizational skills.</li>
          </ul>

          <p>This position offers a competitive compensation package. If you describe yourself as a team player, enthusiastic, possess a high level of integrity and the willingness to make a significant contribution, we invite you to apply for this opportunity, please submit your resume via hr.agmbasements@gmail.com.</p>
          <p>Only qualified candidates will be contacted.</p>
        </div>
      </>
    );
  }
}

export default FieldSaleRepresentative;