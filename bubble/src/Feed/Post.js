import React from 'react';
import './feed.css'
const { toLike } = require('../Firebase');

class Post extends React.Component {

  toLikeMethod = () => {
    const { id, userLogged, liked } = this.props;
    toLike(id, userLogged, liked);
    window.location.reload();
  }

  render(){

    const { author, text, liked, likes, image } = this.props;
    const ArrayLikes = likes ? (Object.keys(likes)).map(like => likes[like]) : [];

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
            <button onClick={this.toLikeMethod}></button>
          </div>
          <div className="feed__post-footer-liked-list">

            {
              ArrayLikes.map((like, index) => {
                return (
                  <div key={index} className="feed__post-footer-liked-item" style={{ backgroundImage: `url(/${like.image})` }}></div>
                )
              })
            }
            
          </div>
        </div>

      </div>
    );
  }
}

export default Post;
