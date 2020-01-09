import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import CristianoAndMaria from '../Assets/Images/Cristiano-Maria2.jpg';
import AnnaHarris from '../Assets/Images/Anna-Harris2.jpg';
import KardinalOffishall from '../Assets/Images/Kardinal-Officiall_resize2.jpg';
import LauraAndVeronica from '../Assets/Images/Laura-Veronica2.jpg';
import NataliaPopova from '../Assets/Images/Natalia-Popova2.jpg';
import RichardAllison from '../Assets/Images/Richard-Allison2.jpg';
import SarahBailey from '../Assets/Images/Sarah-Bailey2.jpg';
import SteffaniJones from '../Assets/Images/Steffani-Jones_resize2-1.jpg';

class OurClients extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    const clients = [
      {
        "index_key": 1,
        "image": CristianoAndMaria,
        "name": "Cristiano and Maria",
        "review_text": "We absolutely love our Basement! We received such a friendly and approachable service Highly recommended! We would definitely do business again."
      },
      {
        "index_key": 2,
        "image": AnnaHarris,
        "name": "Anna Harris",
        "review_text": "All the reviews we read were exactly right! It was an excellent customer service experience throughout. We highly recommend AGM."
      },
      {
        "index_key": 3,
        "image": KardinalOffishall,
        "name": "Kardinal Offishall",
        "review_text": "Too good to be true but this company is for real! Incredible service and top quality. We would recommend AGM to all of our friends."
      },
      {
        "index_key": 4,
        "image": LauraAndVeronica,
        "name": "Laura and Veronica",
        "review_text": "We found AGM easy to work with and very reasonably priced. You guys were great. The Basement looks very nice now."
      },
      {
        "index_key": 5,
        "image": NataliaPopova,
        "name": "Natalia Popova",
        "review_text": "The price was very affordable, – I was expecting a 4-5 weeks job, but it was ready in less than 3! Will definitely recommend them to my friends!"
      },
      {
        "index_key": 6,
        "image": RichardAllison,
        "name": "Richard Allison",
        "review_text": "The best possible value for the money. Extremely pleased with the workmanship and the staff. Recommend to everybody."
      },
      {
        "index_key": 7,
        "image": SarahBailey,
        "name": "Sarah Bailey",
        "review_text": "Great craftsmanship, great service, excellent price…what can I tell you! Super job guys! Definitely recommend AGM!"
      },
      {
        "index_key": 8,
        "image": SteffaniJones,
        "name": "Steffani Jones",
        "review_text": "After getting a number of quotes we decided to go with AGM because of their price, and delivery time. Now we love our Basement."
      }
    ]
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Our Clients</title>
        </Helmet>
        <GeneralBanner title="Our Clients" />
        <div className="testimonial mt-5 mb-5">
          <div className="container">
            <div className="row">
              <ul className="testi">
                {clients.map(client => (
                  <li className="d-flex mb-5" index={client.index_key}>
                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                      <div className="testi-lft text-center">
                        <div className="imghldr"><img className="alignnone size-full wp-image-238" src={client.image} alt="testimonial1" width="101" height="101" /></div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-9 col-xs-12">
                      <div className="testi-rht">
                        <h2>{client.name}</h2>
                        {client.review_text}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurClients;