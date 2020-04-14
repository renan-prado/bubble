import React from 'react';
import './login.css'
const { signInWithEmailAndPassword } = require('../Firebase');

class Login extends React.Component {

  state = {
    userId: '',
    pw: ''
  };

  constructor(props){
    super(props);
    this.userIdUpdate = this.userIdUpdate.bind();
    this.pwIdUpdate = this.pwIdUpdate.bind();

  }

  userIdUpdate = event => this.setState({userId: event.target.value});
  pwIdUpdate = event => this.setState({pw: event.target.value});
  

  login = () => {
    signInWithEmailAndPassword(this.state.userId, this.state.pw, resp => {
      if(!resp){
        window.location.href = '/'; 
      }
    });
  }

  render(){
    return (
      <div className="login modal">
        <h1> Seja bem-vindo ao Bubble! </h1>
        <input type="text" value={this.state.userId} onChange={this.userIdUpdate} placeholder="Digite seu id"/>
        <input type="password" value={this.state.pw}  onChange={this.pwIdUpdate} placeholder="Digite sua senha"/>
  
        <button onClick={this.login}> ENTRAR </button>
  
      </div>
    );
  }
  
}

export default Login;
