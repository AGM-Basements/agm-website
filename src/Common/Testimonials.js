import React, { Component } from 'react';
import Slider from "react-slick";
import Image from 'react-image-webp';
import GoogleReviewsImage from '../Assets/Images/google-reviews.jpg';
import GoogleReviewsImageWebP from '../Assets/Images/google-reviews.webp';

class Testimonials extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    const settings = {
        arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const reviews = [
      {
        "author_name": "Ronald L.",
        "keyId": 1,
        "author_url": "https://www.google.com/maps/contrib/112181701610826035537/reviews",
        "rating": 5,
        "text": "Top notch work! Courteous & professional staff. Quality products & finishes. Attention to detail. Project started one month late (my bad... I forgot to get a  building permit) and AGM accommodated us by not cashing our post dated cheques until work started up again!! At different stages you are consulted when design / construction / finish changes are needed at critical stages (I have had previous project contractors make unilateral decisions with less than desirable outcomes). The finishing touches make all of the difference... paint touch-ups, small fixes, TV wall bracket installation & TV mounting, new light & electrical outlet in storage room (slightly out-of-scope but done anyway) and additional pipe & shutoff valve for our water filter to name just a few accommodations. You get a professional project manager who answers his cell and emails outside of business hours when you have concerns or questions.  The value of this project was over $50k... worth every penny. I would strongly recommend AGM... they will be a bit more than their competition however their expertise, adhere to to the latest building codes,  tradespeople are second to none.",
      },
      {
        "author_name": "Valerie A.",
        "keyId": 2,
        "author_url": "https://www.google.com/maps/contrib/109797041282582010158/reviews",
        "rating": 5,
        "text": "We hired AGM to create a small basement suite for our son.  From start to finish it was the best experience.  From the design phase, to the costing, to the actual construction I couldn’t have ask for anything more. Everyone was very very professional and accommodating.",
      },
      {
        "author_name": "Andrew M.",
        "keyId": 3,
        "author_url": "https://www.google.com/maps/contrib/111409753237468327941/reviews",
        "rating": 5,
        "text": "We recently had our basement finished by AGM. We felt very comfortable throughout the project. Their workers strive to do their best and work diligently! It does show in the final finished basement. Our entire family is in agreement that AGM did a great job not only to meet our expectations but in fact exceeded it! We definitely would recommend AGM to everyone!",
      },
      {
        "author_name": "Srikanth R.",
        "keyId": 4,
        "author_url": "https://www.google.com/maps/contrib/105734596933682635891/reviews",
        "rating": 5,
        "text": "AGM is a mark of great workmanship! We are very pleased with our finished basement living space. The process was streamlined and the work progressed from start to finish in a very professional manner! There were no surprises as every aspect of the work was planned at the design stage! We thank all the trades people for their wonderful work in our basement! Keep up the good work!",
      },
      {
        "author_name": "Fazal H",
        "keyId": 5,
        "author_url": "https://www.google.com/maps/contrib/103488205300508486662/reviews",
        "rating": 5,
        "text": "We have a very nice basement now! AGM workers did a great job to finish as per our requirements. All the staff and workers were very professional to deal with and we have had an excellent experience dealing with them during the process. Very experienced tradesmen and what a great company to work with! They do care about their clients and go to a great length to make sure the work is completed in a very timely and professional manner. We are very pleased to recommend AGM for basement finishing work to all homeowners who need their basement finished",
      }
    ]
    return (
      <div className="text-center mb-4">
        <h2 className="section-title">Canada’s Highest Rated Basement Renovators</h2>
        <div className="reviews">
          <div id="google-reviews">
            <h3 className="mt-4">Our reviews simply speak for themselves.</h3>
            <Image
              src={GoogleReviewsImage}
              webp={GoogleReviewsImageWebP}
              alt="Google Reviews"
              width="200"
            />
            <div className="google-reivews-holder">
              <Slider {...settings}>
                {reviews.map(review => (
                  <div key={review.keyId}>
                    <div className="review-item-long">
                      <div className='review-meta'>
                        <div className='review-and-stars'>
                          <span className='review-author'>{review.author_name}</span>
                          <div className="review-stars">
                            <ul>
                              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></li>
                              <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p className='review-text'>{review.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;