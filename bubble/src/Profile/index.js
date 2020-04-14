import React from 'react';
import Header from '../Feed/Header';
import ToPost from '../Feed/ToPost';
import Posts from '../Feed/Posts';
import {
  Link
} from "react-router-dom";
import './profile.css'
const { userLogged } = require('../Firebase');

function App() {
  return (

    <>
        {
          userLogged(user => {
            if(user){
              return (
                <>
                  <div className="profile modal">
                    <div className="overflow">
                        
                      <Header />
                        
                      <div className="profile__header">
                        <div className="profile__header-photo"></div>
                      </div>

                      <div className="profile__name">
                        <h2>Renan Prado</h2>
                      </div>

                      <div className="profile__bios">
                        <label>  
                          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, possimus? Consequatur commodi doloribus quod itaque, consequuntur non, fuga laborum reprehenderit est ut deleniti illo molestias delectus a totam asperiores qui?"
                        </label>
                      </div>

                      <div className="profile__open-chat">
                        <Link to="/chat/lari">Solicitar Conversa</Link>
                      </div>

                      <div className="profile__open-chat">
                        <Link to="/profile/edit">Editar Perfil</Link>
                      </div>

                      <ToPost />
                      <Posts />

                    </div>

                    </div>
                </>
              )
            }
          })
        }
    </>
    
  );
}

export default App;
