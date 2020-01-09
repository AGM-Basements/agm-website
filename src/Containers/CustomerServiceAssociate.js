import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class CustomerServiceAssociate extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Customer Service Associate</title>
        </Helmet>
        <GeneralBanner title="Customer Service Associate" />
        <div className="container mt-5">
          <h2>Customer Service Associate</h2>
          <p>A fast growing home renovations company specializing in basement renovations is seeking a bright individual to join our team as a Inbound/Outbound Customer Service Associate. We are looking for someone who has the confidence, positive attitude, teamwork, motivation and willingness to learn and grow with the company. This role will be located in Vaughan, Ontario and training will be provided. As a company, we are dedicated to helping our employees’ realize and fulfill their full Potential.</p>

          <h3>Key Functions</h3>
          <ul>
            <li>Provide customer service at the highest level at all time.</li>
            <li>Schedule and book appointments for Sales Representatives.</li>
            <li>Provide a wide range of inbound and outbound customer service.</li>
            <li>Coordinate resolutions for customer concerns and issues.</li>
            <li>Responding to client inquiries in a timely and professional manner.</li>
            <li>Negotiation in working towards viable solution is key.</li>
            <li>Update customer information as needed.</li>
            <li>Respond to general inquiries from customers/clients.</li>
            <li>Interact with other departments to resolve customer inquiries.</li>
          </ul>

          <h3>Skills &amp; Qualifications</h3>
          <ul>
            <li>Able to communicate information in a precise manner, both written and verbal.</li>
            <li>Superior communication skills (Oral and written).</li>
            <li>Previous experience in customer service.</li>
            <li>Comfortable meeting and working in a diverse environment.</li>
            <li>Self-motivated, self-directed and goal oriented.</li>
            <li>Ability to multitask and prioritize workload in a fast paced environment.</li>
            <li>Works well independently, as well as in a team environment.</li>
            <li>Solution oriented thinker with a can do attitude.</li>
            <li>Must be computer literate: strong keyboarding and internet navigation skills (e.g. Google Calendar, Google Drive).</li>
            <li>An understanding of Salesforce CRM system will be considered an asset.</li>
            <li>Available to work days, evenings and week-ends to meet customer demand.</li>
            <li>Ability to find customer answers quickly while using multiple resources.</li>
          </ul>

          <h2>Job Type: Full-time</h2>
          <p>Work Hours: Monday thru Fridays 12:00pm to 8:00pm, Saturdays 9:00am to 5:00pm</p>
          <p>Availability: Must be available to work evenings and weekends.</p>

          <p>This position offers a competitive compensation package. If you describe yourself as a team player, enthusiastic, possess a high level of integrity and the willingness to make a significant contribution, we invite you to apply for this opportunity, please submit your resume via hr.agmbasements@gmail.com</p>
          <p>Only qualified candidates will be contacted.</p>
        </div>
      </>
    );
  }
}

export default CustomerServiceAssociate;