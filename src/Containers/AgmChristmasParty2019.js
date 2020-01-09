import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import DSC00037 from '../Assets/Images/ChristmasParty2019/DSC00037.jpg';
import DSC00040 from '../Assets/Images/ChristmasParty2019/DSC00040.jpg';
import DSC00044 from '../Assets/Images/ChristmasParty2019/DSC00044.jpg';
import DSC00054 from '../Assets/Images/ChristmasParty2019/DSC00054.jpg';
import DSC00089 from '../Assets/Images/ChristmasParty2019/DSC00089.jpg';
import DSC00091 from '../Assets/Images/ChristmasParty2019/DSC00091.jpg';
import DSC00095 from '../Assets/Images/ChristmasParty2019/DSC00095.jpg';
import DSC00107 from '../Assets/Images/ChristmasParty2019/DSC00107.jpg';
import DSC00115 from '../Assets/Images/ChristmasParty2019/DSC00115.jpg';
import DSC00120 from '../Assets/Images/ChristmasParty2019/DSC00120.jpg';
import DSC00128 from '../Assets/Images/ChristmasParty2019/DSC00128.jpg';
import DSC00139 from '../Assets/Images/ChristmasParty2019/DSC00139.jpg';
import DSC00157 from '../Assets/Images/ChristmasParty2019/DSC00157.jpg';
import DSC00163 from '../Assets/Images/ChristmasParty2019/DSC00163.jpg';
import DSC00183 from '../Assets/Images/ChristmasParty2019/DSC00183.jpg';
import DSC00190 from '../Assets/Images/ChristmasParty2019/DSC00190.jpg';
import DSC00198 from '../Assets/Images/ChristmasParty2019/DSC00198.jpg';
import DSC00205 from '../Assets/Images/ChristmasParty2019/DSC00205.jpg';
import DSC00212 from '../Assets/Images/ChristmasParty2019/DSC00212.jpg';
import DSC00220 from '../Assets/Images/ChristmasParty2019/DSC00220.jpg';
import DSC00232 from '../Assets/Images/ChristmasParty2019/DSC00232.jpg';
import DSC00237 from '../Assets/Images/ChristmasParty2019/DSC00237.jpg';
import DSC00243 from '../Assets/Images/ChristmasParty2019/DSC00243.jpg';
import DSC00249 from '../Assets/Images/ChristmasParty2019/DSC00249.jpg';
import DSC00256 from '../Assets/Images/ChristmasParty2019/DSC00256.jpg';
import DSC00257 from '../Assets/Images/ChristmasParty2019/DSC00257.jpg';
import DSC00269 from '../Assets/Images/ChristmasParty2019/DSC00269.jpg';
import DSC00272 from '../Assets/Images/ChristmasParty2019/DSC00272.jpg';
import DSC00283 from '../Assets/Images/ChristmasParty2019/DSC00283.jpg';
import DSC00288 from '../Assets/Images/ChristmasParty2019/DSC00288.jpg';
import DSC00293 from '../Assets/Images/ChristmasParty2019/DSC00293.jpg';
import DSC00298 from '../Assets/Images/ChristmasParty2019/DSC00298.jpg';
import DSC00305 from '../Assets/Images/ChristmasParty2019/DSC00305.jpg';
import DSC00306 from '../Assets/Images/ChristmasParty2019/DSC00306.jpg';
import DSC00307 from '../Assets/Images/ChristmasParty2019/DSC00307.jpg';
import DSC00309 from '../Assets/Images/ChristmasParty2019/DSC00309.jpg';
import DSC00310 from '../Assets/Images/ChristmasParty2019/DSC00310.jpg';
import DSC00321 from '../Assets/Images/ChristmasParty2019/DSC00321.jpg';
import DSC00323 from '../Assets/Images/ChristmasParty2019/DSC00323.jpg';
import DSC00331 from '../Assets/Images/ChristmasParty2019/DSC00331.jpg';
import DSC00341 from '../Assets/Images/ChristmasParty2019/DSC00341.jpg';
import DSC00350 from '../Assets/Images/ChristmasParty2019/DSC00350.jpg';
import DSC00353 from '../Assets/Images/ChristmasParty2019/DSC00353.jpg';
import DSC00362 from '../Assets/Images/ChristmasParty2019/DSC00362.jpg';
import DSC00371 from '../Assets/Images/ChristmasParty2019/DSC00371.jpg';
import DSC00397 from '../Assets/Images/ChristmasParty2019/DSC00397.jpg';
import DSC00399 from '../Assets/Images/ChristmasParty2019/DSC00399.jpg';
import DSC00403 from '../Assets/Images/ChristmasParty2019/DSC00403.jpg';
import DSC00409 from '../Assets/Images/ChristmasParty2019/DSC00409.jpg';
import DSC00411 from '../Assets/Images/ChristmasParty2019/DSC00411.jpg';
import DSC00417 from '../Assets/Images/ChristmasParty2019/DSC00417.jpg';
import DSC00427 from '../Assets/Images/ChristmasParty2019/DSC00427.jpg';
import DSC00442 from '../Assets/Images/ChristmasParty2019/DSC00442.jpg';
import DSC00443 from '../Assets/Images/ChristmasParty2019/DSC00443.jpg';
import DSC00489 from '../Assets/Images/ChristmasParty2019/DSC00489.jpg';
import DSC00491 from '../Assets/Images/ChristmasParty2019/DSC00491.jpg';
import DSC00494 from '../Assets/Images/ChristmasParty2019/DSC00494.jpg';
import DSC00507 from '../Assets/Images/ChristmasParty2019/DSC00507.jpg';
import DSC00515 from '../Assets/Images/ChristmasParty2019/DSC00515.jpg';
import DSC00521 from '../Assets/Images/ChristmasParty2019/DSC00521.jpg';
import DSC09682 from '../Assets/Images/ChristmasParty2019/DSC09682.jpg';
import DSC09686 from '../Assets/Images/ChristmasParty2019/DSC09686.jpg';
import DSC09690 from '../Assets/Images/ChristmasParty2019/DSC09690.jpg';
import DSC09691 from '../Assets/Images/ChristmasParty2019/DSC09691.jpg';
import DSC09701 from '../Assets/Images/ChristmasParty2019/DSC09701.jpg';
import DSC09707 from '../Assets/Images/ChristmasParty2019/DSC09707.jpg';
import DSC09709 from '../Assets/Images/ChristmasParty2019/DSC09709.jpg';
import DSC09712 from '../Assets/Images/ChristmasParty2019/DSC09712.jpg';
import DSC09720 from '../Assets/Images/ChristmasParty2019/DSC09720.jpg';
import DSC09728 from '../Assets/Images/ChristmasParty2019/DSC09728.jpg';
import DSC09749 from '../Assets/Images/ChristmasParty2019/DSC09749.jpg';
import DSC09755 from '../Assets/Images/ChristmasParty2019/DSC09755.jpg';
import DSC09763 from '../Assets/Images/ChristmasParty2019/DSC09763.jpg';
import DSC09765 from '../Assets/Images/ChristmasParty2019/DSC09765.jpg';
import DSC09766 from '../Assets/Images/ChristmasParty2019/DSC09766.jpg';
import DSC09769 from '../Assets/Images/ChristmasParty2019/DSC09769.jpg';
import DSC09773 from '../Assets/Images/ChristmasParty2019/DSC09773.jpg';
import DSC09786 from '../Assets/Images/ChristmasParty2019/DSC09786.jpg';
import DSC09798 from '../Assets/Images/ChristmasParty2019/DSC09798.jpg';
import DSC09804 from '../Assets/Images/ChristmasParty2019/DSC09804.jpg';
import DSC09809 from '../Assets/Images/ChristmasParty2019/DSC09809.jpg';
import DSC09810 from '../Assets/Images/ChristmasParty2019/DSC09810.jpg';
import DSC09822 from '../Assets/Images/ChristmasParty2019/DSC09822.jpg';
import DSC09882 from '../Assets/Images/ChristmasParty2019/DSC09882.jpg';
import DSC09883 from '../Assets/Images/ChristmasParty2019/DSC09883.jpg';
import DSC09891 from '../Assets/Images/ChristmasParty2019/DSC09891.jpg';
import DSC09893 from '../Assets/Images/ChristmasParty2019/DSC09893.jpg';
import DSC09909 from '../Assets/Images/ChristmasParty2019/DSC09909.jpg';
import DSC09922 from '../Assets/Images/ChristmasParty2019/DSC09922.jpg';
import DSC09931 from '../Assets/Images/ChristmasParty2019/DSC09931.jpg';
import DSC09961 from '../Assets/Images/ChristmasParty2019/DSC09961.jpg';
import DSC09990 from '../Assets/Images/ChristmasParty2019/DSC09990.jpg';

class AgmChristmasParty2019 extends Component {
  static propTypes = {
  };

  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, {photo, index}) => {
    this.setState({
      currentImage: index
    }, () => {
      this.setState({
        viewerIsOpen: true
      })
    });
  };
  
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  };

  render() {
    const photos = [
      {
        src: DSC00037,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00040,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00044,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00054,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00089,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00091,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00095,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00107,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00115,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00120,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00128,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00139,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00157,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00163,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00183,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00190,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00198,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00205,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00212,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00220,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00232,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00237,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00243,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00249,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00256,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00257,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00269,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00272,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00283,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00288,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00293,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00298,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00305,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00306,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00307,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00309,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00310,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00321,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00323,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00331,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00341,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00350,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00353,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00362,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00371,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00397,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00399,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00403,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00409,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00411,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00417,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00427,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00442,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00443,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00489,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00491,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00494,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00507,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00515,
        width: 1.5,
        height: 1
      },
      {
        src: DSC00521,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09682,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09686,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09690,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09691,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09701,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09707,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09709,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09712,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09720,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09728,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09749,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09755,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09763,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09765,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09766,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09769,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09773,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09786,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09798,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09804,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09809,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09810,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09822,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09882,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09883,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09891,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09893,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09909,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09922,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09931,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09961,
        width: 1.5,
        height: 1
      },
      {
        src: DSC09990,
        width: 1.5,
        height: 1
      }
    ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
      <>
        <Helmet>
          <title>AGM Basements | Christmas Party 2019</title>
        </Helmet>
        <GeneralBanner title="AGM Renovations Christmas Party 2019" />
        <div className="container mt-5">
          <Gallery photos={photos} onClick={(event, photo, index) => this.openLightbox(event, photo, index)} />
          <ModalGateway>
            {this.state.viewerIsOpen ? (
              <Modal onClose={this.closeLightbox}>
                <Carousel
                  currentIndex={this.state.currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>          
        </div>
      </>
    );
  }
}

export default AgmChristmasParty2019;