import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import AUA_9723_w from '../Assets/Images/SummerBBQ2016/AUA_9723_w.jpg';
import AUA_9724_w from '../Assets/Images/SummerBBQ2016/AUA_9724_w.jpg';
import AUA_9726_w from '../Assets/Images/SummerBBQ2016/AUA_9726_w.jpg';
import AUA_9728_w from '../Assets/Images/SummerBBQ2016/AUA_9728_w.jpg';
import AUA_9730_w from '../Assets/Images/SummerBBQ2016/AUA_9730_w.jpg';
import AUA_9732_w from '../Assets/Images/SummerBBQ2016/AUA_9732_w.jpg';
import AUA_9733_w from '../Assets/Images/SummerBBQ2016/AUA_9733_w.jpg';
import AUA_9737_w from '../Assets/Images/SummerBBQ2016/AUA_9737_w.jpg';
import AUA_9738_w from '../Assets/Images/SummerBBQ2016/AUA_9738_w.jpg';
import AUA_9739_w from '../Assets/Images/SummerBBQ2016/AUA_9739_w.jpg';
import AUA_9740_w from '../Assets/Images/SummerBBQ2016/AUA_9740_w.jpg';
import AUA_9741_w from '../Assets/Images/SummerBBQ2016/AUA_9741_w.jpg';
import AUA_9742_w from '../Assets/Images/SummerBBQ2016/AUA_9742_w.jpg';
import AUA_9743_w from '../Assets/Images/SummerBBQ2016/AUA_9743_w.jpg';
import AUA_9744_w from '../Assets/Images/SummerBBQ2016/AUA_9744_w.jpg';
import AUA_9745_w from '../Assets/Images/SummerBBQ2016/AUA_9745_w.jpg';
import AUA_9746_w from '../Assets/Images/SummerBBQ2016/AUA_9746_w.jpg';
import AUA_9750_w from '../Assets/Images/SummerBBQ2016/AUA_9750_w.jpg';
import AUA_9752_w from '../Assets/Images/SummerBBQ2016/AUA_9752_w.jpg';
import AUA_9753_w from '../Assets/Images/SummerBBQ2016/AUA_9753_w.jpg';
import AUA_9755_w from '../Assets/Images/SummerBBQ2016/AUA_9755_w.jpg';
import AUA_9756_w from '../Assets/Images/SummerBBQ2016/AUA_9756_w.jpg';
import AUA_9757_w from '../Assets/Images/SummerBBQ2016/AUA_9757_w.jpg';
import AUA_9762_w from '../Assets/Images/SummerBBQ2016/AUA_9762_w.jpg';
import AUA_9765_w from '../Assets/Images/SummerBBQ2016/AUA_9765_w.jpg';
import AUA_9766_w from '../Assets/Images/SummerBBQ2016/AUA_9766_w.jpg';
import AUA_9769_w from '../Assets/Images/SummerBBQ2016/AUA_9769_w.jpg';
import AUA_9770_w from '../Assets/Images/SummerBBQ2016/AUA_9770_w.jpg';
import AUA_9772_w from '../Assets/Images/SummerBBQ2016/AUA_9772_w.jpg';
import AUA_9774_w from '../Assets/Images/SummerBBQ2016/AUA_9774_w.jpg';
import AUA_9775_w from '../Assets/Images/SummerBBQ2016/AUA_9775_w.jpg';
import AUA_9777_w from '../Assets/Images/SummerBBQ2016/AUA_9777_w.jpg';
import AUA_9782_w from '../Assets/Images/SummerBBQ2016/AUA_9782_w.jpg';
import AUA_9783_w from '../Assets/Images/SummerBBQ2016/AUA_9783_w.jpg';
import AUA_9786_w from '../Assets/Images/SummerBBQ2016/AUA_9786_w.jpg';
import AUA_9791_w from '../Assets/Images/SummerBBQ2016/AUA_9791_w.jpg';
import AUA_9792_w from '../Assets/Images/SummerBBQ2016/AUA_9792_w.jpg';
import AUA_9797_w from '../Assets/Images/SummerBBQ2016/AUA_9797_w.jpg';
import AUA_9799_w from '../Assets/Images/SummerBBQ2016/AUA_9799_w.jpg';
import AUA_9801_w from '../Assets/Images/SummerBBQ2016/AUA_9801_w.jpg';
import AUA_9804_w from '../Assets/Images/SummerBBQ2016/AUA_9804_w.jpg';
import AUA_9805_w from '../Assets/Images/SummerBBQ2016/AUA_9805_w.jpg';
import AUA_9806_w from '../Assets/Images/SummerBBQ2016/AUA_9806_w.jpg';
import AUA_9808_w from '../Assets/Images/SummerBBQ2016/AUA_9808_w.jpg';
import AUA_9809_w from '../Assets/Images/SummerBBQ2016/AUA_9809_w.jpg';
import AUA_9810_w from '../Assets/Images/SummerBBQ2016/AUA_9810_w.jpg';
import AUA_9814_w from '../Assets/Images/SummerBBQ2016/AUA_9814_w.jpg';
import AUA_9817_w from '../Assets/Images/SummerBBQ2016/AUA_9817_w.jpg';
import AUA_9818_w from '../Assets/Images/SummerBBQ2016/AUA_9818_w.jpg';
import AUA_9821_w from '../Assets/Images/SummerBBQ2016/AUA_9821_w.jpg';
import AUA_9825_w from '../Assets/Images/SummerBBQ2016/AUA_9825_w.jpg';
import AUA_9827_w from '../Assets/Images/SummerBBQ2016/AUA_9827_w.jpg';
import AUA_9833_w from '../Assets/Images/SummerBBQ2016/AUA_9833_w.jpg';
import AUA_9834_w from '../Assets/Images/SummerBBQ2016/AUA_9834_w.jpg';
import AUA_9838_w from '../Assets/Images/SummerBBQ2016/AUA_9838_w.jpg';
import AUA_9839_w from '../Assets/Images/SummerBBQ2016/AUA_9839_w.jpg';
import AUA_9841_w from '../Assets/Images/SummerBBQ2016/AUA_9841_w.jpg';
import AUA_9842_w from '../Assets/Images/SummerBBQ2016/AUA_9842_w.jpg';
import AUA_9844_w from '../Assets/Images/SummerBBQ2016/AUA_9844_w.jpg';
import AUA_9845_w from '../Assets/Images/SummerBBQ2016/AUA_9845_w.jpg';
import AUA_9847_w from '../Assets/Images/SummerBBQ2016/AUA_9847_w.jpg';
import AUA_9848_w from '../Assets/Images/SummerBBQ2016/AUA_9848_w.jpg';
import AUA_9849_w from '../Assets/Images/SummerBBQ2016/AUA_9849_w.jpg';
import AUA_9850_w from '../Assets/Images/SummerBBQ2016/AUA_9850_w.jpg';
import AUA_9852_w from '../Assets/Images/SummerBBQ2016/AUA_9852_w.jpg';
import AUA_9853_w from '../Assets/Images/SummerBBQ2016/AUA_9853_w.jpg';
import AUA_9857_w from '../Assets/Images/SummerBBQ2016/AUA_9857_w.jpg';
import AUA_9860_w from '../Assets/Images/SummerBBQ2016/AUA_9860_w.jpg';
import AUA_9864_w from '../Assets/Images/SummerBBQ2016/AUA_9864_w.jpg';
import AUA_9866_w from '../Assets/Images/SummerBBQ2016/AUA_9866_w.jpg';
import AUA_9869_w from '../Assets/Images/SummerBBQ2016/AUA_9869_w.jpg';
import AUA_9870_w from '../Assets/Images/SummerBBQ2016/AUA_9870_w.jpg';
import AUA_9872_w from '../Assets/Images/SummerBBQ2016/AUA_9872_w.jpg';
import AUA_9874_w from '../Assets/Images/SummerBBQ2016/AUA_9874_w.jpg';
import AUA_9880_w from '../Assets/Images/SummerBBQ2016/AUA_9880_w.jpg';
import AUA_9882_w from '../Assets/Images/SummerBBQ2016/AUA_9882_w.jpg';
import AUA_9883_w from '../Assets/Images/SummerBBQ2016/AUA_9883_w.jpg';
import AUA_9886_w from '../Assets/Images/SummerBBQ2016/AUA_9886_w.jpg';
import AUA_9889_w from '../Assets/Images/SummerBBQ2016/AUA_9889_w.jpg';
import AUA_9890_w from '../Assets/Images/SummerBBQ2016/AUA_9890_w.jpg';
import AUA_9894_w from '../Assets/Images/SummerBBQ2016/AUA_9894_w.jpg';
import AUA_9898_w from '../Assets/Images/SummerBBQ2016/AUA_9898_w.jpg';
import AUA_9899_w from '../Assets/Images/SummerBBQ2016/AUA_9899_w.jpg';
import AUA_9905_w from '../Assets/Images/SummerBBQ2016/AUA_9905_w.jpg';
import AUA_9906_w from '../Assets/Images/SummerBBQ2016/AUA_9906_w.jpg';
import AUA_9908_w from '../Assets/Images/SummerBBQ2016/AUA_9908_w.jpg';
import AUA_9910_w from '../Assets/Images/SummerBBQ2016/AUA_9910_w.jpg';
import AUA_9913_w from '../Assets/Images/SummerBBQ2016/AUA_9913_w.jpg';
import AUA_9915_w from '../Assets/Images/SummerBBQ2016/AUA_9915_w.jpg';
import AUA_9917_w from '../Assets/Images/SummerBBQ2016/AUA_9917_w.jpg';
import AUA_9919_w from '../Assets/Images/SummerBBQ2016/AUA_9919_w.jpg';
import AUA_9922_w from '../Assets/Images/SummerBBQ2016/AUA_9922_w.jpg';
import AUA_9925_w from '../Assets/Images/SummerBBQ2016/AUA_9925_w.jpg';
import AUA_9931_w from '../Assets/Images/SummerBBQ2016/AUA_9931_w.jpg';
import AUA_9932_w from '../Assets/Images/SummerBBQ2016/AUA_9932_w.jpg';
import AUA_9934_w from '../Assets/Images/SummerBBQ2016/AUA_9934_w.jpg';
import AUA_9936_w from '../Assets/Images/SummerBBQ2016/AUA_9936_w.jpg';
import AUA_9939_w from '../Assets/Images/SummerBBQ2016/AUA_9939_w.jpg';
import AUA_9940_w from '../Assets/Images/SummerBBQ2016/AUA_9940_w.jpg';
import AUA_9941_w from '../Assets/Images/SummerBBQ2016/AUA_9941_w.jpg';
import AUA_9942_w from '../Assets/Images/SummerBBQ2016/AUA_9942_w.jpg';
import AUA_9944_w from '../Assets/Images/SummerBBQ2016/AUA_9944_w.jpg';
import AUA_9951_w from '../Assets/Images/SummerBBQ2016/AUA_9951_w.jpg';
import AUA_9954_w from '../Assets/Images/SummerBBQ2016/AUA_9954_w.jpg';
import AUA_9957_w from '../Assets/Images/SummerBBQ2016/AUA_9957_w.jpg';
import AUA_9968_w from '../Assets/Images/SummerBBQ2016/AUA_9968_w.jpg';
import AUA_9972_w from '../Assets/Images/SummerBBQ2016/AUA_9972_w.jpg';
import AUA_9973_w from '../Assets/Images/SummerBBQ2016/AUA_9973_w.jpg';
import AUA_9974_w from '../Assets/Images/SummerBBQ2016/AUA_9974_w.jpg';
import AUA_9977_w from '../Assets/Images/SummerBBQ2016/AUA_9977_w.jpg';
import AUA_9980_w from '../Assets/Images/SummerBBQ2016/AUA_9980_w.jpg';
import AUA_9981_w from '../Assets/Images/SummerBBQ2016/AUA_9981_w.jpg';
import AUA_9982_w from '../Assets/Images/SummerBBQ2016/AUA_9982_w.jpg';
import AUA_9988_w from '../Assets/Images/SummerBBQ2016/AUA_9988_w.jpg';
import AUA_9989_w from '../Assets/Images/SummerBBQ2016/AUA_9989_w.jpg';
import AUA_9990_w from '../Assets/Images/SummerBBQ2016/AUA_9990_w.jpg';
import AUA_9991_w from '../Assets/Images/SummerBBQ2016/AUA_9991_w.jpg';
import AUA_9993_w from '../Assets/Images/SummerBBQ2016/AUA_9993_w.jpg';
import AUA_9999_w from '../Assets/Images/SummerBBQ2016/AUA_9999_w.jpg';
import AUA_90005_w from '../Assets/Images/SummerBBQ2016/AUA_90005_w.jpg';
import AUA_90006_w from '../Assets/Images/SummerBBQ2016/AUA_90006_w.jpg';
import AUA_90007_w from '../Assets/Images/SummerBBQ2016/AUA_90007_w.jpg';
import AUA_90011_w from '../Assets/Images/SummerBBQ2016/AUA_90011_w.jpg';
import AUA_90012_w from '../Assets/Images/SummerBBQ2016/AUA_90012_w.jpg';
import AUA_90013_w from '../Assets/Images/SummerBBQ2016/AUA_90013_w.jpg';
import AUA_90016_w from '../Assets/Images/SummerBBQ2016/AUA_90016_w.jpg';
import AUA_90017_w from '../Assets/Images/SummerBBQ2016/AUA_90017_w.jpg';
import AUA_90019_w from '../Assets/Images/SummerBBQ2016/AUA_90019_w.jpg';
import AUA_90020_w from '../Assets/Images/SummerBBQ2016/AUA_90020_w.jpg';
import AUA_90021_w from '../Assets/Images/SummerBBQ2016/AUA_90021_w.jpg';
import AUA_90023_w from '../Assets/Images/SummerBBQ2016/AUA_90023_w.jpg';
import AUA_90025_w from '../Assets/Images/SummerBBQ2016/AUA_90025_w.jpg';
import AUA_90030_w from '../Assets/Images/SummerBBQ2016/AUA_90030_w.jpg';
import AUA_90035_w from '../Assets/Images/SummerBBQ2016/AUA_90035_w.jpg';
import AUA_90038_w from '../Assets/Images/SummerBBQ2016/AUA_90038_w.jpg';
import AUA_90040_w from '../Assets/Images/SummerBBQ2016/AUA_90040_w.jpg';
import AUA_90042_w from '../Assets/Images/SummerBBQ2016/AUA_90042_w.jpg';
import AUA_90045_w from '../Assets/Images/SummerBBQ2016/AUA_90045_w.jpg';
import AUA_90047_w from '../Assets/Images/SummerBBQ2016/AUA_90047_w.jpg';
import AUA_90049_w from '../Assets/Images/SummerBBQ2016/AUA_90049_w.jpg';
import AUA_90056_w from '../Assets/Images/SummerBBQ2016/AUA_90056_w.jpg';
import AUA_90059_w from '../Assets/Images/SummerBBQ2016/AUA_90059_w.jpg';
import AUA_90063_w from '../Assets/Images/SummerBBQ2016/AUA_90063_w.jpg';
import AUA_90064_w from '../Assets/Images/SummerBBQ2016/AUA_90064_w.jpg';
import AUA_90088_w from '../Assets/Images/SummerBBQ2016/AUA_90088_w.jpg';
import AUA_90090_w from '../Assets/Images/SummerBBQ2016/AUA_90090_w.jpg';
import AUA_90094_w from '../Assets/Images/SummerBBQ2016/AUA_90094_w.jpg';
import AUA_90095_w from '../Assets/Images/SummerBBQ2016/AUA_90095_w.jpg';
import AUA_90099_w from '../Assets/Images/SummerBBQ2016/AUA_90099_w.jpg';
import AUA_90107_w from '../Assets/Images/SummerBBQ2016/AUA_90107_w.jpg';
import AUA_90115_w from '../Assets/Images/SummerBBQ2016/AUA_90115_w.jpg';
import AUA_90116_w from '../Assets/Images/SummerBBQ2016/AUA_90116_w.jpg';
import AUA_90119_w from '../Assets/Images/SummerBBQ2016/AUA_90119_w.jpg';
import AUA_90122_w from '../Assets/Images/SummerBBQ2016/AUA_90122_w.jpg';
import AUA_90123_w from '../Assets/Images/SummerBBQ2016/AUA_90123_w.jpg';
import AUA_90128_w from '../Assets/Images/SummerBBQ2016/AUA_90128_w.jpg';
import AUA_90133_w from '../Assets/Images/SummerBBQ2016/AUA_90133_w.jpg';
import AUA_90137_w from '../Assets/Images/SummerBBQ2016/AUA_90137_w.jpg';
import AUA_90139_w from '../Assets/Images/SummerBBQ2016/AUA_90139_w.jpg';
import AUA_90142_w from '../Assets/Images/SummerBBQ2016/AUA_90142_w.jpg';
import AUA_90155_w from '../Assets/Images/SummerBBQ2016/AUA_90155_w.jpg';
import AUA_90183_w from '../Assets/Images/SummerBBQ2016/AUA_90183_w.jpg';
import AUA_90186_w from '../Assets/Images/SummerBBQ2016/AUA_90186_w.jpg';
import AUA_90190_w from '../Assets/Images/SummerBBQ2016/AUA_90190_w.jpg';
import AUA_90205_w from '../Assets/Images/SummerBBQ2016/AUA_90205_w.jpg';
import AUA_90210_w from '../Assets/Images/SummerBBQ2016/AUA_90210_w.jpg';
import AUA_90213_w from '../Assets/Images/SummerBBQ2016/AUA_90213_w.jpg';
import AUA_90217_w from '../Assets/Images/SummerBBQ2016/AUA_90217_w.jpg';
import AUA_90219_w from '../Assets/Images/SummerBBQ2016/AUA_90219_w.jpg';


class AgmBBQ2016 extends Component {
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
        src: AUA_9723_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9724_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9726_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9728_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9730_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9732_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9733_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9737_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9738_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9739_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9740_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9741_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9742_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9743_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9744_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9745_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9746_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9750_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9752_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9753_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9755_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9756_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9757_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9762_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9765_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9766_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9769_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9770_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9772_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9774_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9775_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9777_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9782_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9783_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9786_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9791_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9792_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9797_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9799_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9801_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9804_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9805_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9806_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9808_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9809_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9810_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9814_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9817_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9818_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9821_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9825_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9827_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9833_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9834_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9838_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9839_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9841_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9842_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9844_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9845_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9847_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9848_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9849_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9850_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9852_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9853_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9857_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9860_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9864_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9866_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9869_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9870_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9872_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9874_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9880_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9882_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9883_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9886_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9889_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9890_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9894_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9898_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9899_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9905_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9906_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9908_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9910_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9913_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9915_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9917_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9919_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9922_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9925_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9931_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9932_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9934_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9936_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9939_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9940_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9941_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9942_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9944_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9951_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9954_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9957_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9968_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9972_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9973_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9974_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9977_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9980_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9981_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9982_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9988_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9989_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9990_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9991_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9993_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_9999_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90005_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90006_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90007_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90011_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90012_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90013_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90016_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90017_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90019_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90020_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90021_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90023_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90025_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90030_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90035_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90038_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90040_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90042_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90045_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90047_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90049_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90056_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90059_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90063_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90064_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90088_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90090_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90094_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90095_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90099_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90107_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90115_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90116_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90119_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90122_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90123_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90128_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90133_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90137_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90139_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90142_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90155_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90183_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90186_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90190_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90205_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90210_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90213_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90217_w,
        width: 1.5,
        height: 1
      },
      {
        src: AUA_90219_w ,
        width: 1.5,
        height: 1
      }
    ];

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | 2016 BBQ</title>
        </Helmet>
        <GeneralBanner title="AGM Renovations BBQ Summer 2016" />
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

export default AgmBBQ2016;