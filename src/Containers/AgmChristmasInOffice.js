import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import a20161223_122855 from '../Assets/Images/ChristmasParty2016/20161223_122855.jpg';
import a20161223_122903 from '../Assets/Images/ChristmasParty2016/20161223_122903.jpg';
import a20161223_123431 from '../Assets/Images/ChristmasParty2016/20161223_123431.jpg';
import a20161223_123432 from '../Assets/Images/ChristmasParty2016/20161223_123432.jpg';
import a20161223_123433 from '../Assets/Images/ChristmasParty2016/20161223_123433.jpg';
import a20161223_123446 from '../Assets/Images/ChristmasParty2016/20161223_123446.jpg';
import a20161223_123447 from '../Assets/Images/ChristmasParty2016/20161223_123447.jpg';
import a20161223_123804 from '../Assets/Images/ChristmasParty2016/20161223_123804.jpg';
import a20161223_123808 from '../Assets/Images/ChristmasParty2016/20161223_123808.jpg';
import a20161223_123825 from '../Assets/Images/ChristmasParty2016/20161223_123825.jpg';
import a20161223_123826 from '../Assets/Images/ChristmasParty2016/20161223_123826.jpg';
import a20161223_135845 from '../Assets/Images/ChristmasParty2016/20161223_135845.jpg';
import a20161223_135847 from '../Assets/Images/ChristmasParty2016/20161223_135847.jpg';
import a20161223_135853 from '../Assets/Images/ChristmasParty2016/20161223_135853.jpg';
import a20161223_135857 from '../Assets/Images/ChristmasParty2016/20161223_135857.jpg';
import a20161223_135903 from '../Assets/Images/ChristmasParty2016/20161223_135903.jpg';
import a20161223_140052 from '../Assets/Images/ChristmasParty2016/20161223_140052.jpg';
import a20161223_140226 from '../Assets/Images/ChristmasParty2016/20161223_140226.jpg';
import a20161223_140241 from '../Assets/Images/ChristmasParty2016/20161223_140241.jpg';
import a20161223_140246 from '../Assets/Images/ChristmasParty2016/20161223_140246.jpg';
import a20161223_142127 from '../Assets/Images/ChristmasParty2016/20161223_142127.jpg';
import a20161223_142129 from '../Assets/Images/ChristmasParty2016/20161223_142129.jpg';
import a20161223_143009 from '../Assets/Images/ChristmasParty2016/20161223_143009.jpg';
import a20161223_143235 from '../Assets/Images/ChristmasParty2016/20161223_143235.jpg';
import a20161223_143245 from '../Assets/Images/ChristmasParty2016/20161223_143245.jpg';
import a20161223_143257 from '../Assets/Images/ChristmasParty2016/20161223_143257.jpg';
import a20161223_143312 from '../Assets/Images/ChristmasParty2016/20161223_143312.jpg';
import a20161223_144017 from '../Assets/Images/ChristmasParty2016/20161223_144017.jpg';
import a20161223_144019 from '../Assets/Images/ChristmasParty2016/20161223_144019.jpg';
import a20161223_144025 from '../Assets/Images/ChristmasParty2016/20161223_144025.jpg';
import a20161223_144029 from '../Assets/Images/ChristmasParty2016/20161223_144029.jpg';
import a20161223_144347 from '../Assets/Images/ChristmasParty2016/20161223_144347.jpg';
import a20161223_144350 from '../Assets/Images/ChristmasParty2016/20161223_144350.jpg';
import a20161223_144357 from '../Assets/Images/ChristmasParty2016/20161223_144357.jpg';
import a20161223_144402 from '../Assets/Images/ChristmasParty2016/20161223_144402.jpg';
import a20161223_1400520 from '../Assets/Images/ChristmasParty2016/20161223_1400520.jpg';
import a20161223_1430090 from '../Assets/Images/ChristmasParty2016/20161223_1430090.jpg';
import a20161223_1444020 from '../Assets/Images/ChristmasParty2016/20161223_1444020.jpg';

class AgmOfficeChristmas2016 extends Component {
  static propTypes = {
  };

  state = {
    currentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, {photo, index}) => {
    console.log('event', event);
    console.log('photo', photo);
    console.log('index', index);
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
        src: a20161223_122855,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_122903,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123431,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123432,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123433,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123446,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123447,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123804,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123808,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123825,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_123826,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_135845,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_135847,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_135853,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_135857,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_135903,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_140052,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_140226,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_140241,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_140246,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_142127,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_142129,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_143009,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_143235,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_143245,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_143257,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_143312,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_144017,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144019,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144025,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144029,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144347,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144350,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144357,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_144402,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_1400520,
        width: 1.5,
        height: 1
      },
      {
        src: a20161223_1430090,
        width: 1.5,
        height: 2
      },
      {
        src: a20161223_1444020,
        width: 1.5,
        height: 2
      }
    ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
      <>
        <Helmet>
          <title>AGM Basements | Christmas Office Party</title>
        </Helmet>
        <GeneralBanner title="AGM Renovations Christmas in the office 2016" />
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

export default AgmOfficeChristmas2016;