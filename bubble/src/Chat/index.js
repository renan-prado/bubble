import React from 'react';
import './chat.css';

function App() {
  return (
    <div className="chat">
      
      <div className="chat__top">

        <div className="chat__back">
          <i></i>
        </div>

        <div className="chat__name">
          <label> Larissa Flores </label>
        </div>

      </div>
      
      <div className="chat__message">

        <div className="chat__message-msg --me">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>


        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --you">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>

        <div className="chat__message-msg --me">
          <div className="chat__message-photo"></div>
          <div className="chat__message-talk">
            <label> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </label>
          </div>
        </div>


        <div className="chat__message-msg --you">
        </div>

      </div>

      <div className="chat__textarea">

        <textarea placeholder="Digite sua mensagem aqui..."></textarea>

      </div>

    </div>
  );
}

export default App;
