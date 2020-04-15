import React from 'react';
import './feed.css'

class Post extends React.Component {

  render(){

    const { author, text, liked, image } = this.props;

    return (
      <div className="feed__post">

        <div className="feed__post-top">
          <div className="feed__post-top-photo" style={{ backgroundImage: `url(/${image})` }}></div>
          <div className="feed__post-top-name">
            <label>{author}</label>
          </div>
        </div>
        <div className="feed__post-text">
          <label>{text}</label>
        </div>
        <div className="feed__post-footer">
          <div className={liked ? "feed__post-footer-like --liked" : "feed__post-footer-like"}>
            <button></button>
          </div>
          <div className="feed__post-footer-liked-list">
            <div className="feed__post-footer-liked-item"></div>
            <div className="feed__post-footer-liked-item"></div>
            <div className="feed__post-footer-liked-item"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Post;
