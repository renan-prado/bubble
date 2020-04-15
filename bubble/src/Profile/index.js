import React from 'react';
import Header from '../Feed/Header';
import ToPost from '../Feed/ToPost';
import Posts from '../Feed/Posts';
import {
  Link
} from "react-router-dom";
import './profile.css'

const {
  userLogged,
  readProfile
} = require('../Firebase');

class Profile extends React.Component {

  state = {
    logged: false,
    userId: false,
    me: true,
    profile: {}
  }

  componentDidMount(){
    userLogged(user => {
      if(user){
        this.setState({ logged: true , userId: user.id});
      }
      
      this.getProfile();

    });
  }

  getProfile = () => {
    const { match: { params } } = this.props;

    readProfile(params.id ? params.id : this.state.userId, profile => this.setState({ profile }));

    if(params.id && params.id !== this.state.userId)
      this.setState({ me: false });

    else if(params.id && params.id === this.state.userId) {
      window.location.href = '/profile'
    }

  }

  render(){
    return (      
      <>

        {
          this.state.logged
          ? (
            <div className="profile modal">
              <div className="overflow">
                  
                <Header />
                  
                <div className="profile__header">
                  <div className="profile__header-photo" style={{ 'backgroundImage': `url(/${this.state.profile.image})` }}></div>
                </div>

                <div className="profile__name">
                  <h2> { this.state.profile.username } </h2>
                </div>

                <div className="profile__bios">
                  <label>  {this.state.profile.bios} </label>
                </div>

                {
                  this.state.me
                  ? (
                    <>
                      <div className="profile__open-chat">
                        <Link to="/edit/profile">Editar Perfil</Link>
                      </div>
                      <ToPost />
                    </>
                  )
                  :
                  (
                    <div className="profile__open-chat">
                      <Link to="/chat/lari">Solicitar Conversa</Link>
                    </div>
                  )
                }

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

export default Profile;
