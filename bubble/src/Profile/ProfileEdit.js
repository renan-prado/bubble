import React from 'react';
import Header from '../Feed/Header';
import './profile.css'

const {
  userLogged,
  readProfile,
  saveProfile
} = require('../Firebase');


class EditProfile extends React.Component  {
  
  state = {
    logged: false,
    userId: false,
    profile: {},
    input: {
      name: '',
      bios: ''
    }
  }

  constructor(props){
    super(props)
    this.userNameUpdate = this.userNameUpdate.bind(this);
    this.biosUpdate = this.biosUpdate.bind(this);
  }

  componentDidMount(){
    userLogged(user => {
      if(user){
        this.setState({ logged: true, userId: user.id });
      }
      
      this.getProfile();

    });
  }

  userNameUpdate = event => this.setState({ input: { name: event.target.value, bios: this.state.input.bios }});
  biosUpdate = event => this.setState({ input: { bios: event.target.value, name: this.state.input.name }});

  getProfile = () => {
    readProfile(this.state.userId, profile => {
      this.setState({ profile })
      this.setState({ input: { name: profile.username, bios: profile.bios }})
    });
  }

  saveProfile = () => {

    const name = this.state.input.name;
    const bios = this.state.input.bios;
    const id = this.state.userId;
    const image = this.state.profile.image;

    saveProfile(id, name, bios, image);

    window.location.href = '/profile';
  }

  render(){
    return (
      <div className="profile --edit modal">

        <Header />

        <div className="profile__edit">
          <input type="text" value={this.state.input.name} onChange={this.userNameUpdate} placeholder="Digite o seu nome" disabled={this.state.profile.editName}/>
          <textarea value={this.state.input.bios} onChange={this.biosUpdate} placeholder="Digite uma descrição para o seu perfil"></textarea>
          <button onClick={this.saveProfile}> Salvar </button>
        </div>
        
      </div>
    );
  }
}

export default EditProfile;
