import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { Link } from "react-router-dom";

class BasementKitchenRenovation extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Kitchen Renovation</title>
        </Helmet>
        <GeneralBanner title="Basement Kitchen Renovation" />
        <div className="container">
          <p>Are you ready to add a custom kitchen to your basement space? Have you had to struggle for years with a kitchen that is poorly designed, too small or simply outdated? If so, call us to add a custom kitchen to your basement. We will improve the functionality of your kitchen, install the proper type of appliances, choose the right finishes and materials and focus on the small details of the project, such as proper lighting.</p>

          <h3>Creating a Functional, Safe and Efficient Basement Kitchen</h3>

          <p>Every home is designed initially with a certain type of appliance in mind. We will determine the wiring and hook-ups present to select the right type of stove – electric, natural gas or a combo unit – and provide plumbing services to ensure convenience features such as a dishwasher can be installed in the space.</p>

          <p>However, basement kitchen renovation goes much further than just selecting the right flooring and appliances. Our team will also make sure that proper fire exits are present and accessible, provide adequate ventilation for the cooking fumes and provide the best route for connecting all the appliances, such as the dishwasher to the plumbing in the basement.</p>

          <h3>Quality Basement Kitchen Finishing within Your Budget</h3>

          <p>We understand that creating a basement kitchen can be a rather large undertaking. This is why we will take the time to discuss your wants and goals for the space and then create it accordingly. We will use the highest quality materials available for the budget you have to work with to ensure you get a basement kitchen you love and that is highly functional.</p>

          <p>Are you ready to have a modern, easy-to-use and convenient kitchen that actually makes it fun to cook? If so, contact us today to <Link to="/estimate">schedule your free, in-home estimate</Link>.</p>
        </div>
      </>
    );
  }
}

export default BasementKitchenRenovation;