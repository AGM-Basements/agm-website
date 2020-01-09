import React, { Component } from 'react';
import Image from 'react-image-webp';
import RenomarkLogo from '../Assets/Images/renomark_logo.png';
import WarrantyLogo from '../Assets/Images/AGM_4yr_logo_orig.png';
import BILDLogo from '../Assets/Images/bild-logo-orig.jpeg';

import WarrantyLogoWebP from '../Assets/Images/AGM_4yr_logo_orig.webp';
import BILDLogoWebP from '../Assets/Images/bild-logo-orig.webp';
import RenomarkLogoWebP from '../Assets/Images/renomark_logo.webp';

/* eslint-disable */
class Warranty extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <div id="warranty-section">
        <div className="row">
          <div className="col">
            <h2 className="section-title">4-Year Basebord-to-Baseboard Warranty</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <p>Since we use the most talented tradesmen in the industry and highest quality materials, we are not afraid to offer a warranty that you won't find elsewhere, not even when buying a new home!</p>
            <p>As an active BILD Member and Renomark Certified Contractor, you can be confident in choosing AGM Basements for your project.</p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="warranty-images">
              <a href="https://bildgta.ca" target="_blank">
                <Image
                  src={BILDLogo}
                  webp={BILDLogoWebP}
                  alt="BILD"
                />
              </a>

              <a href="https://renomark.ca" className="ft-logo" target="_blank">
                <Image
                  src={RenomarkLogo}
                  webp={RenomarkLogoWebP}
                  alt="Renomark"
                />
              </a>
              <Image
                src={WarrantyLogo}
                webp={WarrantyLogoWebP}
                alt="AGM Warranty"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warranty;
