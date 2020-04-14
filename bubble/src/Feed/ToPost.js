import React from 'react';
import './feed.css'

class ToPost extends React.Component {

  render(){
    return (
      <div className="feed__topost">
        
        <textarea placeholder="Compartilhe algo..."></textarea>
        <div className="feed_topost-footer">
          <button>Postar</button>
        </div>

      </div>
    );
  }
}

export default ToPost;
