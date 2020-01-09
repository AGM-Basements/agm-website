import React, { Component } from 'react';
import Image from 'react-image-webp';
import DryWall from '../../Assets/Images/drywall.png';
import Taping from '../../Assets/Images/taping.png';
import Painting from '../../Assets/Images/painting.png';
import Tiling from '../../Assets/Images/tiling.png';
import Plumbing from '../../Assets/Images/plumbing.png';
import Electrical from '../../Assets/Images/electrical.png';

import DryWallWebP from '../../Assets/Images/drywall.webp';
import TapingWebP from '../../Assets/Images/taping.webp';
import PaintingWebP from '../../Assets/Images/painting.webp';
import TilingWebP from '../../Assets/Images/tiling.webp';
import PlumbingWebP from '../../Assets/Images/plumbing.webp';
import ElectricalWebP from '../../Assets/Images/electrical.webp';

class EstimateServices extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <h1 className="main-page-title">Our Basement Renovation Services</h1>
        <div className="services">
          <div className="service">
            <div className="image">
              {/* <img src={DryWall} alt="Drywall" /> */}
              <Image
                src={DryWall}
                webp={DryWallWebP}
                alt="Basement Renovation"
              />
            </div>
            <div className="title">
              <h3>Drywalll</h3>
            </div>
            <div className="description">
              <p>We employ only the most professional drywall installers whose goal is to deliver complete satisfaction to each and every client.</p>
            </div>
          </div>

          <div className="service">
            <div className="image">
              {/* <img src={Taping} alt="Drywall" /> */}
              <Image
                src={Taping}
                webp={TapingWebP}
                alt="Taping"
              />
            </div>
            <div className="title">
              <h3>Taping</h3>
            </div>
            <div className="description">
              <p>Our drywall taping techniques will bring a high-quality smooth finish, with a level of excellence you will take pride in.</p>
            </div>
          </div>

          <div className="service">
            <div className="image">
              {/* <img src={Painting} alt="Drywall" /> */}
              <Image
                src={Painting}
                webp={PaintingWebP}
                alt="Painting"
              />
            </div>
            <div className="title">
              <h3>Painting</h3>
            </div>
            <div className="description">
              <p>We include all wall priming, painting of ceilings, baseboards, casing, crown and cove moldings into our basement construction packages.</p>
            </div>
          </div>

          <div className="service">
            <div className="image">
              {/* <img src={Tiling} alt="Drywall" /> */}
              <Image
                src={Tiling}
                webp={TilingWebP}
                alt="Tiling"
              />
            </div>
            <div className="title">
              <h3>Tiling</h3>
            </div>
            <div className="description">
              <p>Shower, bathroom, and kitchenette tiling will be done by professional tile installers who are employed directly by AGM.</p>
            </div>
          </div>

          <div className="service">
            <div className="image">
              {/* <img src={Plumbing} alt="Drywall" /> */}
              <Image
                src={Plumbing}
                webp={PlumbingWebP}
                alt="Plumbing"
              />
            </div>
            <div className="title">
              <h3>Plumbing</h3>
            </div>
            <div className="description">
              <p>We employ only the most professional drywall installers whose goal is to deliver complete satisfaction to each and every client.</p>
            </div>
          </div>

          <div className="service">
            <div className="image">
              {/* <img src={Electrical} alt="Drywall" /> */}
              <Image
                src={Electrical}
                webp={ElectricalWebP}
                alt="Electrical"
              />
            </div>
            <div className="title">
              <h3>Electrical</h3>
            </div>
            <div className="description">
              <p>We employ only the most professional drywall installers whose goal is to deliver complete satisfaction to each and every client.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EstimateServices;