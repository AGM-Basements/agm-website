import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../Assets/Styles/our_work.scss';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import wh12 from '../Assets/Images/wh-12.jpg';
import DSC1171 from '../Assets/Images/DSC_1171-Edit.jpg';
import DSC0610 from '../Assets/Images/DSC_0610.jpg';
import Basement136 from '../Assets/Images/Basement136.jpg';
import Basement131 from '../Assets/Images/Basement131.jpg';
import Basement102 from '../Assets/Images/Basement102.jpg';
import Basement097 from '../Assets/Images/Basement097.jpg';
import Basement093 from '../Assets/Images/Basement093.jpg';
import Basement090 from '../Assets/Images/Basement090.jpg';
import bresize from '../Assets/Images/b_resize.jpg';
import AUA6162w from '../Assets/Images/AUA_6162_w.jpg';
import AUA6102w from '../Assets/Images/AUA_6102_w.jpg';
import AUA5211 from '../Assets/Images/AUA_5211.jpg';
import HouserSt010 from '../Assets/Images/36-Houser-St_010.jpg';
import HouserSt008 from '../Assets/Images/36-Houser-St_008.jpg';

import HouserSt007 from '../Assets/Images/36-Houser-St_007.jpg';
import DSC8044 from '../Assets/Images/DSC8044.jpg';
import DSC2210 from '../Assets/Images/DSC2210.jpg';
import DSC1068 from '../Assets/Images/DSC1068.jpg';
import AUA8117 from '../Assets/Images/AUA8117.jpg';
import AUA4437 from '../Assets/Images/AUA4437.jpg';
import BasementEntranceStairsPlans from '../Assets/Images/Basement-Entrance-Stairs-Plans.jpg';
import DSC2195 from '../Assets/Images/DSC2195.jpg';
import DSC1073 from '../Assets/Images/DSC1073.jpg';
import AUA6936 from '../Assets/Images/AUA6936.jpg';
import AUA4432 from '../Assets/Images/AUA4432.jpg';
import Winecellar6 from '../Assets/Images/Wine-cellar-6.jpg';
import Winecellar5 from '../Assets/Images/Wine-cellar-5.jpg';
import DSC2288 from '../Assets/Images/DSC2288.jpg';
import DSC2258 from '../Assets/Images/DSC2258.jpg';
import DSC2237 from '../Assets/Images/DSC2237.jpg';
import basementrenovationsbar from '../Assets/Images/basement-renovations-bar.jpg';
import basementrenovationsbathroom2 from '../Assets/Images/basement-renovations-bathroom-2.jpg';
import basementbathroomrenovations from '../Assets/Images/basement-bathroom-renovations.jpg';
import UntitledHDR3 from '../Assets/Images/Untitled_HDR3.jpg';
import basementrenovationsfamilyroom1 from '../Assets/Images/basement-renovations-family-room-1.jpg';
import basementrenovationsfamilyroom from '../Assets/Images/basement-renovations-family-room.jpg';
import basementrenovationsplayroom2 from '../Assets/Images/basement-renovations-play-room-2.jpg';
import basementrenovationsplayroom3 from '../Assets/Images/basement-renovations-play-room-3.jpg';
import basementrenovationsfamilyroom4 from '../Assets/Images/basement-renovations-family-room-4.jpg';
import basementrenovationskitchen2 from '../Assets/Images/basement-renovations-kitchen-2.jpg';
import basementrenovationskitchen1 from '../Assets/Images/basement-renovations-kitchen-1.jpg';

class OurWork extends Component {
  static propTypes = {
  };

  state = {
    hasFilterActive: false,
    currentFilter: '',
    showImageModal: false,
    modalImage: null,
  };

  renderWorkItemClass = (itemType) => {
    let theClass = 'show';

    if (this.state.hasFilterActive) {
      console.log('half way')
      if (itemType !== this.state.currentFilter) {
        theClass = 'hidden';
      }
    }
    return theClass;
  }

  applyFilter = (group) => {
    if (group === 'all') {
      this.setState({
        hasFilterActive: false,
        currentFilter: ''
      });
    } else {
      this.setState({
        hasFilterActive: true,
        currentFilter: group
      });
    }
  }

  closeImageModal = () => {
    this.setState({
      showImageModal: false,
      modalImage: null,
    });
  }

  openImageModal = (image) => {
    this.setState({
      showImageModal: true,
      modalImage: image,
    });
  }

  render() {
    const portfolioItems = [
      {
        smImage: wh12,
        lgImage: wh12,
        title: 'Test One',
        group: 'apartment'
      },
      {
        smImage: DSC1171,
        lgImage: DSC1171,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: DSC0610,
        lgImage: DSC0610,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement136,
        lgImage: Basement136,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement131,
        lgImage: Basement131,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement102,
        lgImage: Basement102,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement097,
        lgImage: Basement097,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement093,
        lgImage: Basement093,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: Basement090,
        lgImage: Basement090,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: bresize,
        lgImage: bresize,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: AUA6162w,
        lgImage: AUA6162w,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: AUA6102w,
        lgImage: AUA6102w,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: AUA5211,
        lgImage: AUA5211,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: HouserSt010,
        lgImage: HouserSt010,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: HouserSt008,
        lgImage: HouserSt008,
        title: 'Test Two',
        group: 'apartment',
      },
      {
        smImage: HouserSt007,
        lgImage: HouserSt007,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: DSC8044,
        lgImage: DSC8044,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: DSC2210,
        lgImage: DSC2210,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: DSC1068,
        lgImage: DSC1068,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: AUA8117,
        lgImage: AUA8117,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: AUA4437,
        lgImage: AUA4437,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: BasementEntranceStairsPlans,
        lgImage: BasementEntranceStairsPlans,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: DSC2195,
        lgImage: DSC2195,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: DSC1073,
        lgImage: DSC1073,
        title: 'Another',
        group: 'apartment'
      },
      {
        smImage: AUA6936,
        lgImage: AUA6936,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: AUA4432,
        lgImage: AUA4432,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: Winecellar6,
        lgImage: Winecellar6,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: Winecellar5,
        lgImage: Winecellar5,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: DSC2288,
        lgImage: DSC2288,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: DSC2258,
        lgImage: DSC2258,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: DSC2237,
        lgImage: DSC2237,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: basementrenovationsbar,
        lgImage: basementrenovationsbar,
        title: 'Another',
        group: 'bar'
      },
      {
        smImage: basementrenovationsbathroom2,
        lgImage: basementrenovationsbathroom2,
        title: 'Another',
        group: 'bathroom'
      },
      {
        smImage: basementbathroomrenovations,
        lgImage: basementbathroomrenovations,
        title: 'Another',
        group: 'bathroom'
      },
      {
        smImage: UntitledHDR3,
        lgImage: UntitledHDR3,
        title: 'Another',
        group: 'bedroom'
      },
      {
        smImage: basementrenovationsfamilyroom1,
        lgImage: basementrenovationsfamilyroom1,
        title: 'Another',
        group: 'bedroom'
      },
      {
        smImage: basementrenovationsfamilyroom,
        lgImage: basementrenovationsfamilyroom,
        title: 'Another',
        group: 'family'
      },
      {
        smImage: basementrenovationsplayroom2,
        lgImage: basementrenovationsplayroom2,
        title: 'Another',
        group: 'family'
      },
      {
        smImage: basementrenovationsplayroom3,
        lgImage: basementrenovationsplayroom3,
        title: 'Another',
        group: 'family'
      },
      {
        smImage: basementrenovationsfamilyroom4,
        lgImage: basementrenovationsfamilyroom4,
        title: 'Another',
        group: 'family'
      },
      {
        smImage: basementrenovationskitchen2,
        lgImage: basementrenovationskitchen2,
        title: 'Another',
        group: 'kitchen'
      },
      {
        smImage: basementrenovationskitchen1,
        lgImage: basementrenovationskitchen1,
        title: 'Another',
        group: 'kitchen'
      }
    ];
    
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Our Work</title>
        </Helmet>
        <GeneralBanner title="Our Work" />
        <div id="portfolio-website">
          <div className="portfolio-website-container container">
            <div className="filter-ul">
              <ul id="filters" className="clearfix">
                <li><span className={`filter ${this.state.hasFilterActive ? '' : 'active'}`} onClick={() => this.applyFilter('all')}>All</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'apartment' ? 'active' : ''}`} onClick={() => this.applyFilter('apartment')}>Apartment</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'bar' ? 'active' : ''}`} onClick={() => this.applyFilter('bar')} >Bar Wine Cellar</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'bathroom' ? 'active' : ''}`} onClick={() => this.applyFilter('bathroom')} >Bathroom Renovation</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'bedroom' ? 'active' : ''}`} onClick={() => this.applyFilter('bedroom')} >Bedrooms</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'family' ? 'active' : ''}`} onClick={() => this.applyFilter('family')} >Family Room</span></li>
                <li><span className={`filter ${this.state.currentFilter === 'kitchen' ? 'active' : ''}`} onClick={() => this.applyFilter('kitchen')} >Kitchen Renovation</span></li>
              </ul>
            </div>
            <div className="portfoliolist">
              {portfolioItems.map((item, index) => (
                <div key={index} className={`portfolio ${this.renderWorkItemClass(item.group)}`} style={{backgroundImage: `url(${item.smImage})`}}>
                  <div className="portfolio-wrapper">
                    <div className="lbl">
                      <div className="lblTxt-outer">
                        <div className="lblTxt-inner">
                          <div className="hover-btn">
                            <div className="feature_holder_icons"><div className="port-item zoomm group1" onClick={() => this.openImageModal(item.lgImage)} data-lightbox="recent-work"></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {this.state.showImageModal ? (
          <div className="lightboxandcover">
            <div className="lightbox">
              <img src={this.state.modalImage} alt="" />
            </div>
            <div className="cover" onClick={this.closeImageModal}></div>
          </div>
        ) : null}
      </>
    );
  }
}

export default OurWork;