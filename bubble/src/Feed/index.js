import React from 'react';
import Header from './Header'
import './feed.css'

class Feed extends React.Component {

  render(){
    return (
      <div className="feed modal">
        <Header />
      </div>
    );
  }
}

export default Feed;
