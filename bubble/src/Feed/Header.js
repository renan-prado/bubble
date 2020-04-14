import React from 'react';

import {
  Link
} from "react-router-dom";

import './feed.css'

class Header extends React.Component {

  render(){
    return (
      <div className="feed__header">

        <div className="feed__header-item --home"><Link to="/"></Link></div>
        <div className="feed__header-item --rules"><Link to="/"></Link></div>
        <div className="feed__header-item --chat"><Link to="/chat"></Link></div>
        <div className="feed__header-item --rank"><Link to="/ranking"></Link></div>
        <div className="feed__header-item --profile"><Link to="/profile"></Link></div>
        <div className="feed__header-item --play"><Link to="/game"></Link></div>

      </div>
    );
  }
}

export default Header;
