import React from 'react';
import './login.css'

function App() {
  return (
    <div className="login modal">
      <h1> Seja bem-vindo ao Bubble! </h1>
      <input type="text" placeholder="Digite seu id"/>
      <input type="password" placeholder="Digite sua senha"/>

      <button> ENTRAR </button>

    </div>
  );
}

export default App;
