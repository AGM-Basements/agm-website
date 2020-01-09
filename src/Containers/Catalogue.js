import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import WelmondPresentationImage from '../Assets/Images/welmond-presentation.jpg';
import WelmondPDF from '../Assets/Images/CATALOG_WELMOND-spread.pdf';

class Catalogue extends Component {
  static propTypes = {
  };

  state = {
    correctPassword: false,
    password: 'abc',
    inputValue: '',
  };

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleFormSubmit = () => {
    if (this.state.inputValue === this.state.password) {
      this.setState({
        correctPassword: true,
      });
    } else {
      alert('The password was incorrect');
    }
  }

  render() {
    return (
      <>
        <GeneralBanner title="Catalogue" />
        <div className="container text-center">
          {this.state.correctPassword ? (
          <a href={WelmondPDF} target="_blank">
            <img src={WelmondPresentationImage} alt="Welmond Presentation" className="mt-5" />
          </a>
          ) : (
            <>
              <h2>This page is password protected.</h2>
              <p>Please enter the password below:</p>
              <input type="text" placeholder="password" type="password" onChange={this.updateInputValue} />
              <button className="btn blue-btn sm mt-3" onClick={this.handleFormSubmit}>Submit</button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Catalogue;