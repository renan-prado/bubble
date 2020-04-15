import React from 'react';
import './feed.css'

class ToPost extends React.Component {

  

  uuidv4 = () => {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

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
