import React from 'react';
import MsgBox from './MsgBox';
import './chat.css';
const { userLogged } = require('../Firebase');

class Chat extends React.Component {

  state = {
      allMsg: [
        {
          who: 'me',
          msg: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        },
        {
          who: 'you',
          msg: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        },
        {
          who: 'you',
          msg: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        },
        {
          who: 'me',
          msg: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'
        },
      ]
  }

  render(){

    const { match: { params } } = this.props;

    return (
      <>
        {
          userLogged(user => {
            if(user){
              return (
                <>
                  <div className="chat modal">
                    <div className="chat__top">
                      <a className="chat__back" href="/chat">
                        <i></i>
                      </a>
                      <div className="chat__name">
                        <label> {params.id} Flores </label>
                      </div>

                      <div className="chat__caracteres">
                        <label> <b>310</b> caracteres </label>
                      </div>

                    </div>
                    
                    <MsgBox allMsg={this.state.allMsg} />

                    <div className="chat__textarea">
                      <textarea placeholder="Digite sua mensagem aqui..."></textarea>
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
}

export default Chat;
