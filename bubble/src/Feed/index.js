import React from 'react';
import Header from './Header'
import ToPost from './ToPost'
import './feed.css'

class Feed extends React.Component {

  render(){
    return (
      <div className="feed modal">
        <Header />
        <ToPost />
      </div>
    );
  }
}

export default Feed;
