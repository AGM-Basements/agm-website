import React, {Component} from "react";
import {Helmet} from "react-helmet";
import "../Assets/Styles/our_work.scss";
import GeneralBanner from "../Common/BannerParts/GeneralBanner";
import {SvgIcon} from '@material-ui/core';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import c from "../Assets/Images/c.jpg";
import DSC1171 from "../Assets/Images/DSC_1171-Edit.jpg";
import DSC0610 from "../Assets/Images/DSC_0610.jpg";
import Basement136 from "../Assets/Images/Basement136.jpg";
import Basement131 from "../Assets/Images/Basement131.jpg";
import Basement102 from "../Assets/Images/Basement102.jpg";
import Basement097 from "../Assets/Images/Basement097.jpg";
import Basement093 from "../Assets/Images/Basement093.jpg";
import Basement090 from "../Assets/Images/Basement090.jpg";
import bresize from "../Assets/Images/b_resize.jpg";
import AUA6162w from "../Assets/Images/AUA_6162_w.jpg";
import AUA6102w from "../Assets/Images/AUA_6102_w.jpg";
import AUA5211 from "../Assets/Images/AUA_5211.jpg";
import HouserSt010 from "../Assets/Images/36-Houser-St_010.jpg";
import HouserSt008 from "../Assets/Images/36-Houser-St_008.jpg";

import HouserSt007 from "../Assets/Images/36-Houser-St_007.jpg";
import DSC8044 from "../Assets/Images/DSC8044.jpg";
import DSC2210 from "../Assets/Images/DSC2210.jpg";
import DSC1068 from "../Assets/Images/DSC1068.jpg";
import AUA8117 from "../Assets/Images/AUA8117.jpg";
import AUA4437 from "../Assets/Images/AUA4437.jpg";
import BasementEntranceStairsPlans from "../Assets/Images/Basement-Entrance-Stairs-Plans.jpg";
import DSC2195 from "../Assets/Images/DSC2195.jpg";
import DSC1073 from "../Assets/Images/DSC1073.jpg";
import AUA6936 from "../Assets/Images/AUA6936.jpg";
import AUA4432 from "../Assets/Images/AUA4432.jpg";
import Winecellar6 from "../Assets/Images/Wine-cellar-6.jpg";
import Winecellar5 from "../Assets/Images/Wine-cellar-5.jpg";
import DSC2288 from "../Assets/Images/DSC2288.jpg";
import DSC2258 from "../Assets/Images/DSC2258.jpg";
import DSC2237 from "../Assets/Images/DSC2237.jpg";
import basementrenovationsbar from "../Assets/Images/basement-renovations-bar.jpg";
import basementrenovationsbathroom2 from "../Assets/Images/basement-renovations-bathroom-2.jpg";
import basementbathroomrenovations from "../Assets/Images/basement-bathroom-renovations.jpg";
import UntitledHDR3 from "../Assets/Images/Untitled_HDR3.jpg";
import basementrenovationsfamilyroom1 from "../Assets/Images/basement-renovations-family-room-1.jpg";
import basementrenovationsfamilyroom from "../Assets/Images/basement-renovations-family-room.jpg";
import basementrenovationsplayroom2 from "../Assets/Images/basement-renovations-play-room-2.jpg";
import basementrenovationsplayroom3 from "../Assets/Images/basement-renovations-play-room-3.jpg";
import basementrenovationsfamilyroom4 from "../Assets/Images/basement-renovations-family-room-4.jpg";
import basementrenovationskitchen2 from "../Assets/Images/basement-renovations-kitchen-2.jpg";
import basementrenovationskitchen1 from "../Assets/Images/basement-renovations-kitchen-1.jpg";

import BathReno1 from "../Assets/Images/BathReno1.jpg";
import BathReno2 from "../Assets/Images/BathReno2.jpg";
import BathReno3 from "../Assets/Images/BathReno3.jpg";
import BathReno4 from "../Assets/Images/BathReno4.jpg";
import BathReno5 from "../Assets/Images/BathReno5.jpg";
import BathReno6 from "../Assets/Images/BathReno6.jpg";
import BathReno7 from "../Assets/Images/BathReno7.jpg";
import BathReno8 from "../Assets/Images/BathReno8.jpg";
import BathReno9 from "../Assets/Images/BathReno9.jpg";
import BathReno10 from "../Assets/Images/BathReno10.jpg";
import BathReno11 from "../Assets/Images/BathReno11.jpg";
import BathReno12 from "../Assets/Images/BathReno12.jpg";
import BathReno13 from "../Assets/Images/BathReno13.jpg";
import BathReno14 from "../Assets/Images/BathReno14.jpg";
import BathReno15 from "../Assets/Images/BathReno15.jpg";
import BathReno16 from "../Assets/Images/BathReno16.jpg";
import BathReno17 from "../Assets/Images/BathReno17.jpg";
import BathReno18 from "../Assets/Images/BathReno18.jpg";
import BathReno19 from "../Assets/Images/BathReno19.jpg";
import BathReno20 from "../Assets/Images/BathReno20.jpg";
import BathReno21 from "../Assets/Images/BathReno21.jpg";
import BathReno22 from "../Assets/Images/BathReno22.jpg";
import BathReno23 from "../Assets/Images/BathReno23.jpg";
import BathReno24 from "../Assets/Images/BathReno24.jpg";
import BathReno25 from "../Assets/Images/BathReno25.jpg";
import BathReno26 from "../Assets/Images/BathReno26.jpg";
import BathReno27 from "../Assets/Images/BathReno27.jpg";
import BathReno28 from "../Assets/Images/BathReno28.jpg";

import OW1 from "../Assets/Images/OurWorkNewImages/OW1.jpg";
import OW2 from "../Assets/Images/OurWorkNewImages/OW2.jpg";
import OW3 from "../Assets/Images/OurWorkNewImages/OW3.jpg";
import OW4 from "../Assets/Images/OurWorkNewImages/OW4.jpg";
import OW5 from "../Assets/Images/OurWorkNewImages/OW5.jpg";
import OW6 from "../Assets/Images/OurWorkNewImages/OW6.jpg";
import OW7 from "../Assets/Images/OurWorkNewImages/OW7.jpg";
import OW8 from "../Assets/Images/OurWorkNewImages/OW8.jpg";
import OW9 from "../Assets/Images/OurWorkNewImages/OW9.jpg";
import OW10 from "../Assets/Images/OurWorkNewImages/OW10.jpg";
import OW11 from "../Assets/Images/OurWorkNewImages/OW11.jpg";
import OW12 from "../Assets/Images/OurWorkNewImages/OW12.jpg";
import OW13 from "../Assets/Images/OurWorkNewImages/OW13.jpg";
import OW14 from "../Assets/Images/OurWorkNewImages/OW14.jpg";
import OW15 from "../Assets/Images/OurWorkNewImages/OW15.jpg";
import OW16 from "../Assets/Images/OurWorkNewImages/OW16.jpg";
import OW17 from "../Assets/Images/OurWorkNewImages/OW17.jpg";
import OW18 from "../Assets/Images/OurWorkNewImages/OW18.jpg";
import OW19 from "../Assets/Images/OurWorkNewImages/OW19.jpg";
import OW20 from "../Assets/Images/OurWorkNewImages/OW20.jpg";
import OW21 from "../Assets/Images/OurWorkNewImages/OW21.jpg";
import OW22 from "../Assets/Images/OurWorkNewImages/OW22.jpg";
import OW23 from "../Assets/Images/OurWorkNewImages/OW23.jpg";
import OW24 from "../Assets/Images/OurWorkNewImages/OW24.jpg";
import OW25 from "../Assets/Images/OurWorkNewImages/OW25.jpg";
import OW26 from "../Assets/Images/OurWorkNewImages/OW26.jpg";
import OW27 from "../Assets/Images/OurWorkNewImages/OW27.jpg";
import OW28 from "../Assets/Images/OurWorkNewImages/OW28.jpg";
import OW29 from "../Assets/Images/OurWorkNewImages/OW29.jpg";
import OW30 from "../Assets/Images/OurWorkNewImages/OW30.jpg";
import OW31 from "../Assets/Images/OurWorkNewImages/OW31.jpg";
import OW32 from "../Assets/Images/OurWorkNewImages/OW32.jpg";
import OW33 from "../Assets/Images/OurWorkNewImages/OW33.jpg";
import OW34 from "../Assets/Images/OurWorkNewImages/OW34.jpg";
import OW35 from "../Assets/Images/OurWorkNewImages/OW35.jpg";
import OW36 from "../Assets/Images/OurWorkNewImages/OW36.jpg";
import OW37 from "../Assets/Images/OurWorkNewImages/OW37.jpg";
import OW38 from "../Assets/Images/OurWorkNewImages/OW38.jpg";
import OW39 from "../Assets/Images/OurWorkNewImages/OW39.jpg";
import OW40 from "../Assets/Images/OurWorkNewImages/OW40.jpg";
import OW41 from "../Assets/Images/OurWorkNewImages/OW41.jpg";
import OW42 from "../Assets/Images/OurWorkNewImages/OW42.jpg";
import OW43 from "../Assets/Images/OurWorkNewImages/OW43.jpg";
import OW44 from "../Assets/Images/OurWorkNewImages/OW44.jpg";
import OW45 from "../Assets/Images/OurWorkNewImages/OW45.jpg";
import OW46 from "../Assets/Images/OurWorkNewImages/OW46.jpg";
import OW47 from "../Assets/Images/OurWorkNewImages/OW47.jpg";
import OW48 from "../Assets/Images/OurWorkNewImages/OW48.jpg";
import OW49 from "../Assets/Images/OurWorkNewImages/OW49.jpg";
import OW50 from "../Assets/Images/OurWorkNewImages/OW50.jpg";
import OW51 from "../Assets/Images/OurWorkNewImages/OW51.jpg";
import OW52 from "../Assets/Images/OurWorkNewImages/OW52.jpg";
import OW53 from "../Assets/Images/OurWorkNewImages/OW53.jpg";
import OW54 from "../Assets/Images/OurWorkNewImages/OW54.jpg";
import OW55 from "../Assets/Images/OurWorkNewImages/OW55.jpg";
import OW56 from "../Assets/Images/OurWorkNewImages/OW56.jpg";
import OW57 from "../Assets/Images/OurWorkNewImages/OW57.jpg";
import OW58 from "../Assets/Images/OurWorkNewImages/OW58.jpg";
import OW59 from "../Assets/Images/OurWorkNewImages/OW59.jpg";
import OW60 from "../Assets/Images/OurWorkNewImages/OW60.jpg";
import OW61 from "../Assets/Images/OurWorkNewImages/OW61.jpg";
import OW62 from "../Assets/Images/OurWorkNewImages/OW62.jpg";
import OW63 from "../Assets/Images/OurWorkNewImages/OW63.jpg";
import OW64 from "../Assets/Images/OurWorkNewImages/OW64.jpg";
import OW65 from "../Assets/Images/OurWorkNewImages/OW65.jpg";
import OW66 from "../Assets/Images/OurWorkNewImages/OW66.jpg";
import OW67 from "../Assets/Images/OurWorkNewImages/OW67.jpg";
import OW68 from "../Assets/Images/OurWorkNewImages/OW68.jpg";
import OW69 from "../Assets/Images/OurWorkNewImages/OW69.jpg";
import OW70 from "../Assets/Images/OurWorkNewImages/OW70.jpg";
import OW71 from "../Assets/Images/OurWorkNewImages/OW71.jpg";
import OW72 from "../Assets/Images/OurWorkNewImages/OW72.jpg";
import OW73 from "../Assets/Images/OurWorkNewImages/OW73.jpg";
import OW74 from "../Assets/Images/OurWorkNewImages/OW74.jpg";
import OW75 from "../Assets/Images/OurWorkNewImages/OW75.jpg";
import OW76 from "../Assets/Images/OurWorkNewImages/OW76.jpg";
import OW77 from "../Assets/Images/OurWorkNewImages/OW77.jpg";
import OW78 from "../Assets/Images/OurWorkNewImages/OW78.jpg";
import OW79 from "../Assets/Images/OurWorkNewImages/OW79.jpg";
import OW80 from "../Assets/Images/OurWorkNewImages/OW80.jpg";
import OW81 from "../Assets/Images/OurWorkNewImages/OW81.jpg";
import OW82 from "../Assets/Images/OurWorkNewImages/OW82.jpg";
import OW83 from "../Assets/Images/OurWorkNewImages/OW83.jpg";
import OW84 from "../Assets/Images/OurWorkNewImages/OW84.jpg";
import OW85 from "../Assets/Images/OurWorkNewImages/OW85.jpg";
import OW86 from "../Assets/Images/OurWorkNewImages/OW86.jpg";
import OW87 from "../Assets/Images/OurWorkNewImages/OW87.jpg";
import OW88 from "../Assets/Images/OurWorkNewImages/OW88.jpg";
import OW89 from "../Assets/Images/OurWorkNewImages/OW89.jpg";
import OW90 from "../Assets/Images/OurWorkNewImages/OW90.jpg";
import OW91 from "../Assets/Images/OurWorkNewImages/OW91.jpg";
import OW92 from "../Assets/Images/OurWorkNewImages/OW92.jpg";
import OW93 from "../Assets/Images/OurWorkNewImages/OW93.jpg";
import OW94 from "../Assets/Images/OurWorkNewImages/OW94.jpg";
import OW95 from "../Assets/Images/OurWorkNewImages/OW95.jpg";
import wh12 from "../Assets/Images/wh-12.jpg";

import LazyLoad from 'react-lazyload';

class OurWork extends Component {

    static propTypes = {};

    state = {
        hasFilterActive: false,
        currentFilter: "",
        showImageModal: false,
        modalImage: null,
        currentIndex: null
    };

    renderWorkItemClass = itemType => {
        let theClass = "show";

        if (this.state.hasFilterActive) {
            console.log("half way");
            if (itemType !== this.state.currentFilter) {
                theClass = "hidden";
            }
        }
        return theClass;
    };

    closeImageModal = () => {
        this.setState({
            showImageModal: false,
            modalImage: null
        });
    };

    openImageModal = (item, index) => {
        this.setState({
            showImageModal: true,
            modalImage: item.lgImage,
            currentIndex: index
        });
    };

    nextImage = (portfolioItems, index) => {
        if (index < 67) {
            index += 1;
            this.setState({
                modalImage: portfolioItems[index].lgImage,
                currentIndex: index
            });
        }
    };

    prevImage = (portfolioItems, index) => {
        if (index > 0) {
            index -= 1;
            this.setState({
                modalImage: portfolioItems[index].lgImage,
                currentIndex: index
            });
        }
    };

    render() {
        const portfolioItems = [
            {
                smImage: c,
                lgImage: c,
                title: "Test One",
                group: "apartment"
            },
            {
                smImage: wh12,
                lgImage: wh12,
                title: "Test One",
                group: "apartment"
            },
            {
                smImage: DSC1171,
                lgImage: DSC1171,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: DSC0610,
                lgImage: DSC0610,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement136,
                lgImage: Basement136,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement131,
                lgImage: Basement131,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement102,
                lgImage: Basement102,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement097,
                lgImage: Basement097,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement093,
                lgImage: Basement093,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: Basement090,
                lgImage: Basement090,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: bresize,
                lgImage: bresize,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: AUA6162w,
                lgImage: AUA6162w,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: AUA6102w,
                lgImage: AUA6102w,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: AUA5211,
                lgImage: AUA5211,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: HouserSt010,
                lgImage: HouserSt010,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: HouserSt008,
                lgImage: HouserSt008,
                title: "Test Two",
                group: "apartment"
            },
            {
                smImage: HouserSt007,
                lgImage: HouserSt007,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: DSC8044,
                lgImage: DSC8044,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: DSC2210,
                lgImage: DSC2210,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: DSC1068,
                lgImage: DSC1068,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: AUA8117,
                lgImage: AUA8117,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: AUA4437,
                lgImage: AUA4437,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: BasementEntranceStairsPlans,
                lgImage: BasementEntranceStairsPlans,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: DSC2195,
                lgImage: DSC2195,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: DSC1073,
                lgImage: DSC1073,
                title: "Another",
                group: "apartment"
            },
            {
                smImage: AUA6936,
                lgImage: AUA6936,
                title: "Another",
                group: "bar"
            },
            {
                smImage: AUA4432,
                lgImage: AUA4432,
                title: "Another",
                group: "bar"
            },
            {
                smImage: Winecellar6,
                lgImage: Winecellar6,
                title: "Another",
                group: "bar"
            },
            {
                smImage: Winecellar5,
                lgImage: Winecellar5,
                title: "Another",
                group: "bar"
            },
            {
                smImage: DSC2288,
                lgImage: DSC2288,
                title: "Another",
                group: "bar"
            },
            {
                smImage: DSC2258,
                lgImage: DSC2258,
                title: "Another",
                group: "bar"
            },
            {
                smImage: DSC2237,
                lgImage: DSC2237,
                title: "Another",
                group: "bar"
            },
            {
                smImage: basementrenovationsbar,
                lgImage: basementrenovationsbar,
                title: "Another",
                group: "bar"
            },
            {
                smImage: UntitledHDR3,
                lgImage: UntitledHDR3,
                title: "Another",
                group: "bedroom"
            },
            {
                smImage: basementrenovationsfamilyroom1,
                lgImage: basementrenovationsfamilyroom1,
                title: "Another",
                group: "bedroom"
            },
            {
                smImage: basementrenovationsfamilyroom,
                lgImage: basementrenovationsfamilyroom,
                title: "Another",
                group: "family"
            },
            {
                smImage: basementrenovationsplayroom2,
                lgImage: basementrenovationsplayroom2,
                title: "Another",
                group: "family"
            },
            {
                smImage: basementrenovationsplayroom3,
                lgImage: basementrenovationsplayroom3,
                title: "Another",
                group: "family"
            },
            {
                smImage: basementrenovationsfamilyroom4,
                lgImage: basementrenovationsfamilyroom4,
                title: "Another",
                group: "family"
            },
            {
                smImage: basementrenovationskitchen2,
                lgImage: basementrenovationskitchen2,
                title: "Another",
                group: "kitchen"
            },
            {
                smImage: basementrenovationskitchen1,
                lgImage: basementrenovationskitchen1,
                title: "Another",
                group: "kitchen"
            },
            {
                smImage: BathReno1,
                lgImage: BathReno1,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno2,
                lgImage: BathReno2,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno3,
                lgImage: BathReno3,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno4,
                lgImage: BathReno4,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno5,
                lgImage: BathReno5,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno6,
                lgImage: BathReno6,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno7,
                lgImage: BathReno7,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno8,
                lgImage: BathReno8,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno9,
                lgImage: BathReno9,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno10,
                lgImage: BathReno10,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno11,
                lgImage: BathReno11,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno12,
                lgImage: BathReno12,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno13,
                lgImage: BathReno13,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno14,
                lgImage: BathReno14,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno15,
                lgImage: BathReno15,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno16,
                lgImage: BathReno16,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno17,
                lgImage: BathReno17,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno18,
                lgImage: BathReno18,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno19,
                lgImage: BathReno19,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno20,
                lgImage: BathReno20,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno21,
                lgImage: BathReno21,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno22,
                lgImage: BathReno22,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno23,
                lgImage: BathReno23,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno24,
                lgImage: BathReno24,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno25,
                lgImage: BathReno25,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno26,
                lgImage: BathReno26,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno27,
                lgImage: BathReno27,
                title: "Another",
                group: "bathroom"
            },
            {
                smImage: BathReno28,
                lgImage: BathReno28,
                title: "Another",
                group: "bathroom"
            },
            {smImage: OW1, lgImage: OW1},
            {smImage: OW2, lgImage: OW2},
            {smImage: OW3, lgImage: OW3},
            {smImage: OW4, lgImage: OW4},
            {smImage: OW5, lgImage: OW5},
            {smImage: OW6, lgImage: OW6},
            {smImage: OW7, lgImage: OW7},
            {smImage: OW8, lgImage: OW8},
            {smImage: OW9, lgImage: OW9},
            {smImage: OW10, lgImage: OW10},
            {smImage: OW11, lgImage: OW11},
            {smImage: OW12, lgImage: OW12},
            {smImage: OW13, lgImage: OW13},
            {smImage: OW14, lgImage: OW14},
            {smImage: OW15, lgImage: OW15},
            {smImage: OW16, lgImage: OW16},
            {smImage: OW17, lgImage: OW17},
            {smImage: OW18, lgImage: OW18},
            {smImage: OW19, lgImage: OW19},
            {smImage: OW20, lgImage: OW20},
            {smImage: OW21, lgImage: OW21},
            {smImage: OW22, lgImage: OW22},
            {smImage: OW23, lgImage: OW23},
            {smImage: OW24, lgImage: OW24},
            {smImage: OW25, lgImage: OW25},
            {smImage: OW26, lgImage: OW26},
            {smImage: OW27, lgImage: OW27},
            {smImage: OW28, lgImage: OW28},
            {smImage: OW29, lgImage: OW29},
            {smImage: OW30, lgImage: OW30},
            {smImage: OW31, lgImage: OW31},
            {smImage: OW32, lgImage: OW32},
            {smImage: OW33, lgImage: OW33},
            {smImage: OW34, lgImage: OW34},
            {smImage: OW35, lgImage: OW35},
            {smImage: OW36, lgImage: OW36},
            {smImage: OW37, lgImage: OW37},
            {smImage: OW38, lgImage: OW38},
            {smImage: OW39, lgImage: OW39},
            {smImage: OW40, lgImage: OW40},
            {smImage: OW41, lgImage: OW41},
            {smImage: OW42, lgImage: OW42},
            {smImage: OW43, lgImage: OW43},
            {smImage: OW44, lgImage: OW44},
            {smImage: OW45, lgImage: OW45},
            {smImage: OW46, lgImage: OW46},
            {smImage: OW47, lgImage: OW47},
            {smImage: OW48, lgImage: OW48},
            {smImage: OW49, lgImage: OW49},
            {smImage: OW50, lgImage: OW50},
            {smImage: OW51, lgImage: OW51},
            {smImage: OW52, lgImage: OW52},
            {smImage: OW53, lgImage: OW53},
            {smImage: OW54, lgImage: OW54},
            {smImage: OW55, lgImage: OW55},
            {smImage: OW56, lgImage: OW56},
            {smImage: OW57, lgImage: OW57},
            {smImage: OW58, lgImage: OW58},
            {smImage: OW59, lgImage: OW59},
            {smImage: OW60, lgImage: OW60},
            {smImage: OW61, lgImage: OW61},
            {smImage: OW62, lgImage: OW62},
            {smImage: OW63, lgImage: OW63},
            {smImage: OW64, lgImage: OW64},
            {smImage: OW65, lgImage: OW65},
            {smImage: OW66, lgImage: OW66},
            {smImage: OW67, lgImage: OW67},
            {smImage: OW68, lgImage: OW68},
            {smImage: OW69, lgImage: OW69},
            {smImage: OW70, lgImage: OW70},
            {smImage: OW71, lgImage: OW71},
            {smImage: OW72, lgImage: OW72},
            {smImage: OW73, lgImage: OW73},
            {smImage: OW74, lgImage: OW74},
            {smImage: OW75, lgImage: OW75},
            {smImage: OW76, lgImage: OW76},
            {smImage: OW77, lgImage: OW77},
            {smImage: OW78, lgImage: OW78},
            {smImage: OW79, lgImage: OW79},
            {smImage: OW80, lgImage: OW80},
            {smImage: OW81, lgImage: OW81},
            {smImage: OW82, lgImage: OW82},
            {smImage: OW83, lgImage: OW83},
            {smImage: OW84, lgImage: OW84},
            {smImage: OW85, lgImage: OW85},
            {smImage: OW86, lgImage: OW86},
            {smImage: OW87, lgImage: OW87},
            {smImage: OW88, lgImage: OW88},
            {smImage: OW89, lgImage: OW89},
            {smImage: OW90, lgImage: OW90},
            {smImage: OW91, lgImage: OW91},
            {smImage: OW92, lgImage: OW92},
            {smImage: OW93, lgImage: OW93},
            {smImage: OW94, lgImage: OW94},
            {smImage: OW95, lgImage: OW95}
        ];
        return (
            <>
                <Helmet>
                    <title>AGM Basements | Basement Renovations | Our Work</title>
                </Helmet>
                <GeneralBanner title="Our Work"/>
                <div id="portfolio-website" className="sticky-nav-top-margin">
                    <div className="portfolio-website-container">
                        <LazyLoad>
                            <div className="portfoliolist">
                                {portfolioItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`portfolio ${this.renderWorkItemClass(
                                            item.group
                                        )}`}
                                        style={{backgroundImage: `url(${item.smImage})`}}
                                    >
                                        <div className="portfolio-wrapper">
                                            <div className="lbl">
                                                <div className="lblTxt-outer">
                                                    <div className="lblTxt-inner">
                                                        <div className="hover-btn">
                                                            <div className="feature_holder_icons">
                                                                <div
                                                                    className="port-item zoomm group1"
                                                                    onClick={() =>
                                                                        this.openImageModal(item, index)
                                                                    }
                                                                    data-lightbox="recent-work"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </LazyLoad>
                    </div>
                </div>

                {this.state.showImageModal ? (
                    <div className="lightboxandcover">
                        <div className="lightbox">
                            <img src={this.state.modalImage} alt=""/>
                            <p className="x-button"
                               onClick={this.closeImageModal}><SvgIcon component={CloseRoundedIcon}/></p>
                            <p className="next-button"
                               onClick={() => this.nextImage(portfolioItems, this.state.currentIndex)}><SvgIcon
                                component={KeyboardArrowRightRoundedIcon}/>
                            </p>
                            <p className="prev-button"
                               onClick={() => this.prevImage(portfolioItems, this.state.currentIndex)}><SvgIcon
                                component={KeyboardArrowLeftRoundedIcon}/></p>
                        </div>
                        <div className="cover" onClick={this.closeImageModal}></div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default OurWork;
