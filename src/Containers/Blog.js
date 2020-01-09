import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { BLOG_POSTS } from '../Constants/BlogPosts';

class FinishedBasements extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <Helmet>
          <title>AGM Basements | Basement Renovations | Blog</title>
        </Helmet>
        <GeneralBanner title="Blog" />
        <div className="container pt-5">
          {BLOG_POSTS.map((item, index) => (
            <div key={index}>
              <h3><Link to={`/post/${item.slug}`}>{item.title}</Link></h3>
              <p>When you choose AGM to renovate your basement, you’re also supporting the 360ºkids organization. AGM shares a portion of the cost from each basement renovation with 360ºkids, to help improve and expand the supports offered to vulnerable youth so that they can become stable, well-adjusted adults who contribute to the community. AGM employees also volunteer […]</p><p></p>
              <Link to={`/post/${item.slug}`}>Read More</Link>
              <hr />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default FinishedBasements;