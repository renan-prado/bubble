import React from 'react';
import Header from './Header'
import ToPost from './ToPost'
import Posts from './Posts'
import './feed.css'

const { userLogged } = require('../Firebase');

class Feed extends React.Component {

  state = {
    logged: false
  }

  componentDidMount(){
    userLogged(user => {
      if(user){
        this.setState({logged: true});
      }
    });
  }

  render(){

    return (
      <>

        {
          this.state.logged
          ? (
              <div className="feed modal">
                <div className="overflow">
                  <Header />
                  <ToPost />
                  <Posts />
                </div>
              </div>
          )
          : ("")
        }
          
        
              
      </>
    );
  }
}

export default Feed;
