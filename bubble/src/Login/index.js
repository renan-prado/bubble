import React from 'react';
import './login.css'
const { userLogged } = require('../Firebase');

class Login extends React.Component {

  render(){
    return (
      <div className="login modal">
        <h1> Seja bem-vindo ao Bubble! </h1>
        <input type="text" placeholder="Digite seu id"/>
        <input type="password" placeholder="Digite sua senha"/>
  
        <button> ENTRAR </button>
  
      </div>
    );
  }
  
}

export default Login;
