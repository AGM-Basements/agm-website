import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';

class ContactUs extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Contact Us</title>
        </Helmet>
        <GeneralBanner title="Contact Us" />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <div className="img-hldr">
                <p><img className="alignnone size-full wp-image-61" src="https://www.agmrenovations.com/wp-content/uploads/2016/04/location.jpg" alt="location" width="90" height="86" /></p>
              </div>
              <h2 style={{fontSize: '30px', fontWeight: 400, fontFamily: 'Lato,sans-serif', marginBottom: '10px', marginTop: '0px'}}>Address</h2>
              <p><strong>AGM Renovations</strong><br />45 Tigi Court<br />Concord, ON<br />Canada L4K 5E4</p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <div className="img-hldr">
                <p><img className="alignnone size-full wp-image-63" src="https://www.agmrenovations.com/wp-content/uploads/2016/04/call.jpg" alt="call" width="88" height="88" /></p>
              </div>
              <h2 style={{fontSize: '30px', fontWeight: 400, fontFamily: 'Lato,sans-serif', marginBottom: '10px', marginTop: '0px'}}>Phone Number</h2>
              <p>416-477-5429</p>
              <p><strong>Fax:</strong> 905-597-5797</p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12 text-center">
              <div className="img-hldr">
                <p><img className="alignnone wp-image-64" src="https://www.agmrenovations.com/wp-content/uploads/2016/04/email.jpg" alt="email" width="90" height="86" /></p>
              </div>
              <h2 style={{fontSize: '30px', fontWeight: 400, fontFamily: 'Lato,sans-serif', marginBottom: '10px', marginTop: '0px'}}>Email</h2>
              <p><a href="mailto:Service@agmrenovations.com">Service@agmrenovations.com</a></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;