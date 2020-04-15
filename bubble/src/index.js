import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { writeUserData, createUserWithEmailAndPassword, signInWithEmailAndPassword, userLogged, readDocument, logout } = require('./Firebase');

// writeUserData('1', 'Renan', 'hehe');
// createUserWithEmailAndPassword('lari@bubble.com', '123456');
signInWithEmailAndPassword('renan@bubble.com', '123456');
// signInWithEmailAndPassword('lari@bubble.com', '123456');
// logout();

userLogged(user => {

  if(!user){
    if(window.location.pathname !== '/login')
        window.location.href = '/login';
  }

  else {
    
  }

})




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
