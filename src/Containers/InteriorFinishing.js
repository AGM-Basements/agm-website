import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class InteriorFinishing extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Interior Finishing</title>
        </Helmet>
        <GeneralBanner title="Interior Finishing" />
        <div className="container mt-5">
          <h2>BASEMENT FINISHING – PROFESSIONAL INTERIOR DESIGN</h2>
          <h2>AGM BASEMENTS – OFFERS COMPLETE BASEMENT RENOVATION PACKAGES FROM PROFESSIONAL DESIGN TO PROFESSIONAL CLEANING</h2>
          <p>All estimates are free of charge and jobs are scheduled and completed professionally and on time by our team of skilled technicians. We will oversee your project from beginning to end and work with you to ensure quality workmanship.</p>
          <ul>
            <li>
              Drywall<br />
              We employ only professional drywall installers and our goal is to deliver complete satisfaction to each and every client with the quality of our workmanship and our prompt, reliable service.
            </li>
            <li>
              Taping<br />
              Our drywall taping techniques will bring a high quality smooth finish, with a level of excellence you will take pride in.
            </li>
            <li>
              Painting<br />
              We include all wall priming, painting of ceilings, baseboards, casing, crown and cove moldings into our basement construction packages.
            </li>
            High Grade Laminate Flooring
            is standard in our basement renovations packages.
            <li>
              Tiling<br />
              Shower, bathroom, or kitchenette tiling will be done by professional tile installers who are employed directly by AGM. A 2 year unlimited warranty is provided to you standard when you finish your basement with AGM.
            </li>
            <li>
              Plumbing<br />
              Our licensed plumbers will ensure that no problem is left unsolved and you can be sure that any drain or other plumbing defects left by the original house builder will be fixed effectively.
            </li>
            <li>
              Electrical<br />
              We are committed to providing fully licensed electrician service as part of our standard package. Should you ever require an electrical certificate when you decide to sell your property, we will be happy to provide it to you.
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default InteriorFinishing;