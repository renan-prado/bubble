import React from 'react';
import Header from '../Feed/Header';
import {
    Link
  } from "react-router-dom";
import './chat.css';
const { userLogged,getProfiles } = require('../Firebase');

class ChatList extends React.Component {
    state = {
        logged: false,
        profiles: false
    }
    
    componentDidMount(){
        userLogged(user => {
            if(user){
                this.setState({logged: true, userId: user.id});
            }

            this.getAllProfiles();
        });
    }

    getAllProfiles(){
        getProfiles(profiles => {

            let prodfilesKeys = Object.keys(profiles);
            let arrayProfiles = [];
            let temp;

            prodfilesKeys.forEach(profile => {
                temp = profiles[profile];
                temp.id = profile;
                arrayProfiles.push(temp);
            });

            this.setState({profiles: arrayProfiles});
        });
    }


    render(){

        return (

            <>

                {
                    this.state.logged
                    ? (
                        <div className="chat modal">
                            <Header />

                            <div className="chat__list">

                                {
                                    this.state.profiles &&
                                    this.state.profiles.length > 0 &&
                                    this.state.profiles.map(profile => {

                                        if( profile.id && 
                                            profile.username &&
                                            profile.image &&
                                            profile.bios &&
                                            profile.id !== '' &&
                                            profile.username !== '' &&
                                            profile.image !== '' &&
                                            profile.bios !== '' &&
                                            profile.id !== this.state.userId){

                                                return (
                                                    <Link to={`/profile/${profile.id}`}>
                                                        <div className="chat__person" style={{ 'backgroundImage': `url(/${profile.image})` }}>
                                                        </div>
                                                    </Link>
                                                )
                                            }

                                        else {
                                            return ("");
                                        }

                                    })
                                }

                                {
                                    this.state.profiles &&
                                    this.state.profiles.length === 0 &&
                                    (<label> Ninguém terminou o cadastro ainda :/ </label>)
                                }

                                
                                <div className="group__list">
                                    <Link to="/group/teste">
                                        <div className="group__list-item">
                                            <h2>Titulo do grupo</h2>
                                            <div className="group__list-users">
                                                <div className="group__list-user"></div>
                                                <div className="group__list-user"></div>
                                                <div className="group__list-user"></div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/group/teste">
                                        <div className="group__list-item">
                                            <h2>Titulo do grupo</h2>
                                            <div className="group__list-users">
                                                <div className="group__list-user"></div>
                                                <div className="group__list-user"></div>
                                                <div className="group__list-user"></div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/group/create">
                                        <h2> Criar grupo </h2>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )

                    : ("")
                }
         
                
            
            </>

            
        );
    }
  
}

export default ChatList;
