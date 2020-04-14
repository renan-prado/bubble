import React from 'react';
import Header from '../Feed/Header';

import './profile.css'

function App() {
  return (
    <div className="profile --edit modal">

      <Header />

      <div className="profile__edit">
        <input type="text" placeholder="Digite o seu nome"/>
        <textarea placeholder="Digite uma descrição para o seu perfil"></textarea>
        <button> Salvar </button>
      </div>
      
    </div>
  );
}

export default App;
