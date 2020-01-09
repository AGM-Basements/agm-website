import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { find } from 'lodash';
import GeneralBanner from '../Common/BannerParts/GeneralBanner';
import { BLOG_POSTS } from '../Constants/BlogPosts';

class SingleBlog extends Component {
  static propTypes = {
  };

  state = {
    currentPost: {}
  };

  render() {
    const currentPost = find(BLOG_POSTS, post => {
      return post.slug === this.props.match.params.slug
    });

    return (
      <>
        {currentPost ? (
          <>
            <Helmet>
              <title>AGM Basements | {currentPost.title || 'Blog'}</title>
            </Helmet>
            <GeneralBanner title={currentPost.title || ''} />
            <div className="container">
              <div className="post-content" dangerouslySetInnerHTML={{__html: currentPost.content}}></div>
            </div>
          </>
        ) : (
          <div className="text-center mb-5 mt-5">
            <h1 className="mt-5 mb-5">Post Not Found</h1>
          </div>
        )}
      </>
    );
  }
}

export default SingleBlog;