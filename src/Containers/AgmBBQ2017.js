import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import AGMBBQ_005 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_005.jpg';
import AGMBBQ_013 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_013.jpg';
import AGMBBQ_014 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_014.jpg';
import AGMBBQ_016 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_016.jpg';
import AGMBBQ_023 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_023.jpg';
import AGMBBQ_025 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_025.jpg';
import AGMBBQ_026 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_026.jpg';
import AGMBBQ_027 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_027.jpg';
import AGMBBQ_028 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_028.jpg';
import AGMBBQ_029 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_029.jpg';
import AGMBBQ_030 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_030.jpg';
import AGMBBQ_031 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_031.jpg';
import AGMBBQ_032 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_032.jpg';
import AGMBBQ_033 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_033.jpg';
import AGMBBQ_034 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_034.jpg';
import AGMBBQ_035 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_035.jpg';
import AGMBBQ_036 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_036.jpg';
import AGMBBQ_037 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_037.jpg';
import AGMBBQ_039 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_039.jpg';
import AGMBBQ_040 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_040.jpg';
import AGMBBQ_041 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_041.jpg';
import AGMBBQ_042 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_042.jpg';
import AGMBBQ_043 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_043.jpg';
import AGMBBQ_044 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_044.jpg';
import AGMBBQ_045 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_045.jpg';
import AGMBBQ_046 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_046.jpg';
import AGMBBQ_047 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_047.jpg';
import AGMBBQ_048 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_048.jpg';
import AGMBBQ_049 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_049.jpg';
import AGMBBQ_050 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_050.jpg';
import AGMBBQ_051 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_051.jpg';
import AGMBBQ_054 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_054.jpg';
import AGMBBQ_056 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_056.jpg';
import AGMBBQ_057 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_057.jpg';
import AGMBBQ_058 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_058.jpg';
import AGMBBQ_059 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_059.jpg';
import AGMBBQ_060 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_060.jpg';
import AGMBBQ_061 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_061.jpg';
import AGMBBQ_062 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_062.jpg';
import AGMBBQ_063 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_063.jpg';
import AGMBBQ_064 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_064.jpg';
import AGMBBQ_065 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_065.jpg';
import AGMBBQ_066 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_066.jpg';
import AGMBBQ_067 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_067.jpg';
import AGMBBQ_068 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_068.jpg';
import AGMBBQ_070 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_070.jpg';
import AGMBBQ_071 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_071.jpg';
import AGMBBQ_072 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_072.jpg';
import AGMBBQ_073 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_073.jpg';
import AGMBBQ_074 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_074.jpg';
import AGMBBQ_075 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_075.jpg';
import AGMBBQ_076 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_076.jpg';
import AGMBBQ_077 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_077.jpg';
import AGMBBQ_078 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_078.jpg';
import AGMBBQ_079 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_079.jpg';
import AGMBBQ_080 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_080.jpg';
import AGMBBQ_081 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_081.jpg';
import AGMBBQ_082 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_082.jpg';
import AGMBBQ_084 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_084.jpg';
import AGMBBQ_085 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_085.jpg';
import AGMBBQ_086 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_086.jpg';
import AGMBBQ_087 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_087.jpg';
import AGMBBQ_088 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_088.jpg';
import AGMBBQ_089 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_089.jpg';
import AGMBBQ_091 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_091.jpg';
import AGMBBQ_092 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_092.jpg';
import AGMBBQ_093 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_093.jpg';
import AGMBBQ_094 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_094.jpg';
import AGMBBQ_097 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_097.jpg';
import AGMBBQ_098 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_098.jpg';
import AGMBBQ_099 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_099.jpg';
import AGMBBQ_101 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_101.jpg';
import AGMBBQ_102 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_102.jpg';
import AGMBBQ_104 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_104.jpg';
import AGMBBQ_106 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_106.jpg';
import AGMBBQ_107 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_107.jpg';
import AGMBBQ_109 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_109.jpg';
import AGMBBQ_110 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_110.jpg';
import AGMBBQ_111 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_111.jpg';
import AGMBBQ_113 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_113.jpg';
import AGMBBQ_114 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_114.jpg';
import AGMBBQ_115 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_115.jpg';
import AGMBBQ_116 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_116.jpg';
import AGMBBQ_117 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_117.jpg';
import AGMBBQ_118 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_118.jpg';
import AGMBBQ_119 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_119.jpg';
import AGMBBQ_120 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_120.jpg';
import AGMBBQ_121 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_121.jpg';
import AGMBBQ_122 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_122.jpg';
import AGMBBQ_123 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_123.jpg';
import AGMBBQ_124 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_124.jpg';
import AGMBBQ_125 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_125.jpg';
import AGMBBQ_126 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_126.jpg';
import AGMBBQ_127 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_127.jpg';
import AGMBBQ_128 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_128.jpg';
import AGMBBQ_130 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_130.jpg';
import AGMBBQ_131 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_131.jpg';
import AGMBBQ_133 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_133.jpg';
import AGMBBQ_134 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_134.jpg';
import AGMBBQ_135 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_135.jpg';
import AGMBBQ_136 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_136.jpg';
import AGMBBQ_137 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_137.jpg';
import AGMBBQ_138 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_138.jpg';
import AGMBBQ_139 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_139.jpg';
import AGMBBQ_140 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_140.jpg';
import AGMBBQ_141 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_141.jpg';
import AGMBBQ_142 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_142.jpg';
import AGMBBQ_143 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_143.jpg';
import AGMBBQ_145 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_145.jpg';
import AGMBBQ_146 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_146.jpg';
import AGMBBQ_147 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_147.jpg';
import AGMBBQ_1361 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_1361.jpg';
import AGMBBQ_1371 from '../Assets/Images/SummerBBQ2017/AGM-BBQ_1371.jpg';


class AgmBBQ2017 extends Component {
  static propTypes = {
  };

  state = {
    setCurrentImage: 0,
    viewerIsOpen: false,
  };

  openLightbox = (event, {photo, index}) => {
    console.log('event', event);
    console.log('photo', photo);
    console.log('index', index);
    this.setState({
      setCurrentImage: index,
      viewerIsOpen: true
    });
  };
  
  closeLightbox = () => {
    this.setState({
      setCurrentImage: 0,
      viewerIsOpen: false
    });
  };

  render() {
    const photos = [
      {
        src: AGMBBQ_005,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_013,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_014,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_016,
        width: 1.5,
        height: 2.5
      },
      {
        src: AGMBBQ_023,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_025,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_026,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_027,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_028,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_029,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_030,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_031,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_032,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_033,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_034,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_035,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_036,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_037,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_039,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_040,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_041,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_042,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_043,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_044,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_045,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_046,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_047,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_048,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_049,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_050,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_051,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_054,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_056,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_057,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_058,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_059,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_060,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_061,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_062,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_063,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_064,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_065,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_066,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_067,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_068,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_070,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_071,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_072,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_073,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_074,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_075,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_076,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_077,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_078,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_079,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_080,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_081,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_082,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_084,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_085,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_086,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_087,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_088,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_089,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_091,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_092,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_093,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_094,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_097,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_098,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_099,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_101,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_102,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_104,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_106,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_107,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_109,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_110,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_111,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_113,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_114,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_115,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_116,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_117,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_118,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_119,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_120,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_121,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_122,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_123,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_124,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_125,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_126,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_127,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_128,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_130,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_131,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_133,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_134,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_135,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_136,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_137,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_138,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_139,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_140,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_141,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_142,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_143,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_145,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_146,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_147,
        width: 1.5,
        height: 2
      },
      {
        src: AGMBBQ_1361,
        width: 2,
        height: 1.5
      },
      {
        src: AGMBBQ_1371,
        width: 2,
        height: 1.5
      },
    ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | 2017 BBQ</title>
        </Helmet>
        <GeneralBanner title="AGM Renovations BBQ Summer 2017" />
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

export default AgmBBQ2017;