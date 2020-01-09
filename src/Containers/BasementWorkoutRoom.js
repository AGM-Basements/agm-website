import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementWorkoutRoom extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Basement Workout Room</title>
        </Helmet>
        <GeneralBanner title="Basement Workout Room" />
        <div className="container">
          <p>Are you tired of having to drag yourself out of bed every day just to travel to the gym? Regardless of if it is just 10 minutes away or 30 minutes away, there is no question it can be quite the hassle. If you agree, then consider creating your own exercise room in your unfinished basement. There are quite a few perks to having your own workout room in your home and it won’t get in the way of day to day living if you have it in your basement – it is definitely a win-win situation.</p>

          <p>If you find the thought of having a gym in the basement appealing, we can help you renovate the space to meet your needs. We can install electrical outlets and other necessary wiring to run your exercise machines and provide you with a radio or television in the space. We will also design the space so it is functional and convenient to use. This may include the addition of a small “locker” style room, shower or even a full bathroom in your home gym in the basement.</p>

          <p>When it comes to basement gym renovation, you should call us to help you get started. The process can be a bit difficult and challenging for the average DIYer. We understand how to make the most of the space and ensure it can accommodate your workout needs.</p>

          <p>We will remodel the space to offer you your own personal gym, right at home. You can easily reach your goals and have no reason not to workout when we provide remodeling services for your basement gym. Contact us today to <Link to="/estimate">schedule your free, in-home estimate.</Link></p>
        </div>
      </>
    );
  }
}

export default BasementWorkoutRoom;