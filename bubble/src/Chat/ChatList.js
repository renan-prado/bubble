import React from 'react';
import Header from '../Feed/Header';
import {
    Link
  } from "react-router-dom";
import './chat.css';

class ChatList extends React.Component {

    render(){

        return (

            <div className="chat modal">
                <Header />

                <div className="chat__list">

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>

                    <Link to="/profile/teste">
                        <div className="chat__person">
                        </div>
                    </Link>
                    
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
        );
    }
  
}

export default ChatList;
