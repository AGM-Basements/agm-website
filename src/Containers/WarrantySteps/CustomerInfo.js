import React, { Component, Suspense, lazy } from 'react';
import TextInput from '../../Common/Inputs/TextInput';

class CustomerInfo extends Component {
  static propTypes = {
  };

  state = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email_address: '',
    street_address: '',
    street_address_line_two: '',
    city: '',
    state_province_region: '',
    postal_code: '',
    is_submitted: false,
  };

  stepComplete = (e) => {
    e.preventDefault();
    this.setState({
      is_submitted: true,
    });
    const { first_name, last_name, mobile_number, email_address, street_address, street_address_line_two, city, state_province_region, postal_code } = this.state;
    if (first_name && last_name && mobile_number && email_address && street_address && city && state_province_region && postal_code) {
      const stepOneInfo = {
        first_name,
        last_name,
        mobile_number,
        email_address,
        street_address,
        street_address_line_two,
        city,
        state_province_region,
        postal_code,
      };
      this.props.stepComplete(stepOneInfo);
    } else {
      
    }
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { is_submitted, first_name, last_name, mobile_number, email_address, street_address, city, state_province_region, postal_code } = this.state;
    return (
      <>
        <div className="form-fields">
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
            <TextInput
              type="text"
              className="name"
              name="first_name"
              placeholder="First Name"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`first_name ${is_submitted && !first_name ? 'error' : null}`}
              errorMessage={is_submitted && !first_name ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/></svg>
            <TextInput
              type="text"
              className="name"
              name="last_name"
              placeholder="Last Name"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`last_name ${is_submitted && !last_name ? 'error': null}`}
              errorMessage={is_submitted && !last_name ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z"/></svg>
            <TextInput
              type="tel"
              className="mobile"
              name="mobile_number"
              placeholder="Mobile Number"
              id="warrantyPhone"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`mobile_number ${is_submitted && !mobile_number ? 'error': null}`}
              errorMessage={is_submitted && !mobile_number ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/></svg>
            <TextInput
              type="email"
              className="email"
              name="email_address"
              placeholder="Email Address"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`email_address ${is_submitted && !email_address ? 'error': null}`}
              errorMessage={is_submitted && !email_address ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441.37 192c8.49 0 16.62-4.21 22.63-11.72l43.31-54.14c6.25-7.81 6.25-20.47 0-28.29L464 43.71C458 36.21 449.86 32 441.37 32H272V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H56c-13.25 0-24 13.43-24 30v100c0 16.57 10.75 30 24 30h184v32H70.63C62.14 224 54 228.21 48 235.71L4.69 289.86c-6.25 7.81-6.25 20.47 0 28.29L48 372.28c6 7.5 14.14 11.72 22.63 11.72H240v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V384h184c13.25 0 24-13.43 24-30V254c0-16.57-10.75-30-24-30H272v-32h169.37zm6.38 160h-375l-38.4-48 38.45-48h375.19l-.24 96zM64.25 64h375l38.4 48-38.45 48H64.01l.24-96z"/></svg>
            <TextInput
              type="text"
              className="street"
              name="street_address"
              placeholder="Street Address"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`street_address ${is_submitted && !street_address ? 'error': null}`}
              errorMessage={is_submitted && !street_address ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441.37 192c8.49 0 16.62-4.21 22.63-11.72l43.31-54.14c6.25-7.81 6.25-20.47 0-28.29L464 43.71C458 36.21 449.86 32 441.37 32H272V8c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H56c-13.25 0-24 13.43-24 30v100c0 16.57 10.75 30 24 30h184v32H70.63C62.14 224 54 228.21 48 235.71L4.69 289.86c-6.25 7.81-6.25 20.47 0 28.29L48 372.28c6 7.5 14.14 11.72 22.63 11.72H240v120c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V384h184c13.25 0 24-13.43 24-30V254c0-16.57-10.75-30-24-30H272v-32h169.37zm6.38 160h-375l-38.4-48 38.45-48h375.19l-.24 96zM64.25 64h375l38.4 48-38.45 48H64.01l.24-96z"/></svg>
            <TextInput
              type="text"
              className="street"
              name="street_address_line_two"
              placeholder="Street Address Line 2"
              onChange={(e) => this.inputChange(e)}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M560 160c-2 0-4 .4-6 1.2L384 224l-10.3-3.6C397 185.5 416 149.2 416 123 416 55 358.7 0 288 0S160 55.1 160 123c0 11.8 4 25.8 10.4 40.6L20.1 216C8 220.8 0 232.6 0 245.7V496c0 9.2 7.5 16 16 16 2 0 4-.4 6-1.2L192 448l172 60.7c13 4.3 27 4.4 40 .2L555.9 456c12.2-4.9 20.1-16.6 20.1-29.7V176c0-9.2-7.5-16-16-16zM176 419.8L31.9 473l-1.3-226.9L176 195.6zM288 32c52.9 0 96 40.8 96 91 0 27-38.1 88.9-96 156.8-57.9-67.9-96-129.8-96-156.8 0-50.2 43.1-91 96-91zm80 444.2l-160-56.5V228.8c24.4 35.3 52.1 68 67.7 85.7 3.2 3.7 7.8 5.5 12.3 5.5s9-1.8 12.3-5.5c12.8-14.5 33.7-39.1 54.3-66.9l13.4 4.7zm32 .2V252.2L544.1 199l1.3 226.9zM312 128c0-13.3-10.8-24-24-24s-24 10.7-24 24c0 13.2 10.8 24 24 24s24-10.7 24-24z"/></svg>
            <TextInput
              type="text"
              className="city"
              name="city"
              placeholder="City"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`city ${is_submitted && !city ? 'error': null}`}
              errorMessage={is_submitted && !city ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M560 160c-2 0-4 .4-6 1.2L384 224l-10.3-3.6C397 185.5 416 149.2 416 123 416 55 358.7 0 288 0S160 55.1 160 123c0 11.8 4 25.8 10.4 40.6L20.1 216C8 220.8 0 232.6 0 245.7V496c0 9.2 7.5 16 16 16 2 0 4-.4 6-1.2L192 448l172 60.7c13 4.3 27 4.4 40 .2L555.9 456c12.2-4.9 20.1-16.6 20.1-29.7V176c0-9.2-7.5-16-16-16zM176 419.8L31.9 473l-1.3-226.9L176 195.6zM288 32c52.9 0 96 40.8 96 91 0 27-38.1 88.9-96 156.8-57.9-67.9-96-129.8-96-156.8 0-50.2 43.1-91 96-91zm80 444.2l-160-56.5V228.8c24.4 35.3 52.1 68 67.7 85.7 3.2 3.7 7.8 5.5 12.3 5.5s9-1.8 12.3-5.5c12.8-14.5 33.7-39.1 54.3-66.9l13.4 4.7zm32 .2V252.2L544.1 199l1.3 226.9zM312 128c0-13.3-10.8-24-24-24s-24 10.7-24 24c0 13.2 10.8 24 24 24s24-10.7 24-24z"/></svg>
            <TextInput
              type="text"
              className="state"
              name="state_province_region"
              placeholder="State / Province / Region"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`state_province_region ${is_submitted && !state_province_region ? 'error': null}`}
              errorMessage={is_submitted && !state_province_region ? 'Required' : null}
            />
          </div>
          <div className="input-holder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM30.63 118.18L176 67.61V387.8L31.91 441.05l-1.28-322.87zM208 387.71V67.8l160 56.48v319.91l-160-56.48zm192 56.68V124.2l144.09-53.26 1.28 322.87L400 444.39z"/></svg>
            <TextInput
              type="text"
              className="zip w-100"
              name="postal_code"
              placeholder="Postal / Zip Code"
              onChange={(e) => this.inputChange(e)}
              errorMessageClass={`postal_code ${is_submitted && !postal_code ? 'error': null}`}
              errorMessage={is_submitted && !postal_code ? 'Required' : null}
            />
          </div>
        </div>

        <div className="form-button">
          <button className="next-btn" onClick={this.stepComplete}><span className="btn-text">Next Section</span></button>
        </div>
      </>
    );
  }
}

export default CustomerInfo;