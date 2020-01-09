import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class FinishedBasements extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Finished Basements</title>
        </Helmet>
        <GeneralBanner title="Finished Basements" />
        <div className="finished">
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 600, color: '#2b2a2a' }}>BASEMENT FINISHING</h2>
            <h2 style={{ textAlign: 'center' }}>Why Choose AGM Basements?</h2>
            {/* <p> </p>
            <center><iframe src="https://www.youtube.com/embed/MggPv_ehVA4?rel=0&amp;controls=0&amp;showinfo=0" width="640" height="360" frameBorder="0" allowfullscreen="allowfullscreen"></iframe></center>
            <p> </p> */}
            <ul>
              <li><span style={{ color: '#000000' }}><strong>Competitive Pricing</strong></span><br />On average a <strong>basement finishing</strong> package would cost between $40-$120 per square foot in the GTA. For example a 1,000 square feet basement would cost between $40,000-$120,000 depending on materials and upgrades you choose. This price should include all labour, materials, designs and clean-up. <Link to="/estimate">Book your free estimate</Link> online to get a price estimate for your home.</li>
              <li><span style={{ color: '#000000' }}><strong>All Estimates Are Free Of Charge</strong></span><br /><Link to="/estimate">Book</Link> your free in-home estimate online. Our calendar is updated in real-time, so you know we will be there at the time that is most convenient to you</li>
              <li><span style={{ color: '#000000' }}><strong>Thorough examination of structural and underpinning faults is included at no cost</strong></span><br />Most houses will have cracks in the foundation and outer walls. We feel it is of utmost importance to ensure that those faults are inspected and repaired before the basement is fully finished to prevent future water leaks. We include a complete and thorough inspection of these defects at absolutely no cost to you</li>
              <li><span style={{ color: '#000000' }}><strong>We don't sacrifice quality and use industry approved wallboards</strong></span><br />Many people ask: "Why is plastic drywall not recommended?" Gypsum wall panels are fire-resistant, hold interior paints better than the pre-fabricated plastic boards and can be plastered over for decorative effects. All custom luxury homes are built using gypsum drywall, we want nothing less for your basement</li>
              <li><span style={{ color: '#000000' }}><strong>Guaranteed Quality And Well Defined Timelines</strong></span><br />We guarantee that you will get exceptional workmanship and the work will be done following a well defined schedule which will be discussed with you at the start of the project. A site supervisor will be dedicated to your project and will be in constant communication with you. Our team is so efficient and experienced that we can accommodate most changes, customization's or upgrades that customers request in the course of the project. We guarantee that we will stay on time and on budget!</li>
              <li><span style={{ color: '#000000' }}><strong>Basement Finishing Projects Done in 3 weeks</strong></span><br />We understand that doing major basement renovations projects can be quite stressful. Many people that choose to have the work done by a local contractor will also experience additional stress of projects being delayed. AGM is different. All of our tradesmen have over 10 years of experience, so you can be sure you will not have to deal with construction delays.</li>
              <li><span style={{ color: '#000000' }}><strong>Professional 3D Basement Plans</strong></span><br />Our expert, professional designer will meet with you and map out your vision. You choose exactly where everything will be built and only when you are completely satisfied with the design, the construction can start</li>
              <li><span style={{ color: '#000000' }}><strong>You Choose From A Wide Selection Of Materials</strong></span><br />Paint colors, flooring materials, tiles, cabinetry all materials are included in your package. We will order, deliver and install everything for you.</li>
              <li><span style={{ color: '#000000' }}><strong>Fully Licensed And Insured Trades</strong></span><br />We employ our own dry-wall crews, cabinet installers, tile installer, plumbers and electricians. We guarantee that unlike a small local contractor, your project does not stop when a bigger job comes along</li>
              <li><span style={{ color: '#000000' }}><strong>Exceptional Customer Service</strong></span><br />We understand that open and constant communication is key to a successful project. We guarantee that you will always be able to reach one of our team members by calling our office or sending an e-mail to our Site Manager.</li>
              <li><span style={{ color: '#000000' }}><strong>Over 19 Years Of Experience</strong></span><br />We have been doing basement renovations for over 19 years. This means that any problem that comes up during your project will be solved quickly and efficiently. Our tradesmen are so effective that most original builder defects are fixed without increasing the cost of your project</li>
              <li><span style={{ color: '#000000' }}><strong>Finished Basements Gallery</strong></span><br />Browse our online gallery to see the list of completed basement renovations projects. Also during your <Link to="/estimate">consultation</Link> our estimator will show our portfolio with many more basements finished by AGM, which will be of help to you in getting design ideas for your basement, selection of colours and materials</li>
            </ul>
            <p>Want to know more about hiring the right contractor for your Basement Finishing project? Canada Mortgage and Housing Corporation has a number of articles which you may find helpful.</p>
            <p>*Our limited time offer is subject to certain conditions. For more details please contact one of our estimators or inquire by calling our office at <a href="tel:+1-416-477-5429">416-477-5429.</a></p>
          </div>
        </div>
      </>
    );
  }
}

export default FinishedBasements;