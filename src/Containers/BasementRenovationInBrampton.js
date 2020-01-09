import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementRenovationInBrampton extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovation In Brampton</title>
        </Helmet>
        <GeneralBanner title="Basement Renovation in Brampton" />
        <div className="container">
          <p>AGM Basements are Brampton’s leading basement contractors and providers of basement renovation, building and finishing services. Whatever your basement project, AGM Basements guarantees the best value pricing while still delivering superb quality workmanship. Having completed more than 500 basement projects in Brampton, no other basement builders knows the people and the properties of this area better.</p>
          <h3>Every kind of project </h3>
          <p>Our work in Brampton has involved properties of all sizes and ages, both residential and commercial. We’ve managed basement renovations, basement finishing and basement remodelling, and whatever the age of your property, our team of specialists will help draw up a practical plan for the work that you need.</p>
          <h3>Care every step of the way</h3>
          <p>At AGM we’re aware that each of our Brampton-based clients have different requirements for their basement project. In response, our professional and dedicated team is ready to work with you closely, offering a free consultation before the design process, and employing only the best workmen to build, remodel or finish your basement.</p>
          <h3>Our promise</h3>
          <p>When you choose us, you can rely on us to deliver great work. We’ve built wine cellars, saunas, fireplaces, kitchens and bars in Brampton basements. You’ll never be asked to pay before the basement is finished, and the quote we give at the start of the project won’t change at the end. Should the project overrun, you’ll be duly compensated. The materials we use are always high-quality, and it’s the care we take over the details that make us one of the finest basement renovation companies in Brampton.</p>
          <h3>Our expert team</h3>
          <p>All our clients are partnered with an experienced project manager who will communicate directly about your project. Our interior designers are experts at realising our clients’ ambitions for their space. The builders we work with guarantee that no corners are cut, materials are durable and everything meets the highest standards of construction. AGM employs its own tilers, electricians and plumbers, so you can be confident each of them is trained and certified. Finally, our quick and efficient cleaning team will leave you to enjoy your new basement in comfort.</p>
          <h3>Our reputation</h3>
          <p>At AGM we’re proud of the testimonials our clients have given after their work. They not only praise our customer care and pricing, but also our reliability and punctuality. For a sample of our work please visit our open houses or one of the many finishing showcases we put on in Brampton.</p>
          <h3>Call us now</h3>
          <p>Phone us today for a free consultation and hear what we can do for your basement project. At AGM our quotes are free and we’re more than happy to answer any questions you have.</p>
          <p>We hope to hear from you shortly!</p>
        </div>
      </>
    );
  }
}

export default BasementRenovationInBrampton;