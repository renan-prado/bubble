import React from 'react';
import Header from './Header'
import ToPost from './ToPost'
import Posts from './Posts'
import './feed.css'

class Feed extends React.Component {

  render(){
    return (
      <div className="feed modal">

        <div className="overflow">
          <Header />
          <ToPost />
          <Posts />
        </div>

      </div>
    );
  }
}

export default Feed;
