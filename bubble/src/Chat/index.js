import React from 'react';
import MsgBox from './MsgBox';
import './chat.css';
var $ = require('jquery');
const { userLogged, verifyChatCreate, sendMessageChat, getMessages, readProfile } = require('../Firebase');

class Chat extends React.Component {

  constructor(props){
    super(props);

    this.msgUpdate = this.msgUpdate.bind(this);
  }

  state = {
      allMsg: [],
      logged: false,
      type: false,
      secretId: false,
      msg: '',
      userId: false,
      userImage: ''
  }

  componentDidMount(){
    userLogged(user => {
      if(user){
        console.log(user);
        this.setState({logged: true, userId: user.id});
      }
      this.groupOrChat();
    });
  }

  groupOrChat = () => {
    const { match: { params } } = this.props;
    this.setState({ type: params.chatId ? 'chat' : 'group' })

    if(this.state.type === 'chat')
      this.chat(params.chatId);
  }

  chat = (otherUserId) => {
    
    const userId = this.state.userId;
    const cond = userId > otherUserId;
    let chatSecretId;

    if(cond)
      chatSecretId = userId + otherUserId;
    else 
      chatSecretId = otherUserId + userId;

    this.state.secretId = chatSecretId;

    verifyChatCreate(chatSecretId, userId, otherUserId);
    this.getMessagesMethod(this.state.secretId);
  }

  send = () => {
    sendMessageChat(this.state.secretId, this.state.msg, this.state.userId);
    this.setState({msg: ''});

    const newMessage = `
      <div class="chat__message-msg --me">
        <div class="chat__message-photo" style="background-image: url(/${this.state.userImage})"></div>
        <div class="chat__message-talk">
        <label> ${this.state.msg} </label>
        </div>
      </div>
    `;

    $('.chat__message').append(newMessage);      
    $(".chat__message").scrollTop($(".chat__message")[0].scrollHeight);
  }

  msgUpdate = event => {
    this.setState({msg: event.target.value})
  };

  msgpressed = event => {
    if(event.key === 'Enter' ){
      event.preventDefault();
      this.send()
    };
  }

  getMessagesMethod = () => {
    getMessages(this.state.secretId, messages => {

      if(!messages.msgs) return;

      let messagesKey = Object.keys(messages.msgs);
      let allMsg;

      allMsg = messagesKey.map(message => {
          return {
            who: messages.msgs[message].userId,
            msg: messages.msgs[message].msg,
            image: ''
          }
      });

      this.setState({allMsg});
      this.getImages();

    });
  }

  getImages = () => {

    const allMsg = this.state.allMsg;

    let qty = allMsg.length;
    let arrayMsg = [];

    allMsg.forEach((msg, i) => {
      readProfile(msg.who, user => {

        if(msg.who == this.state.userId){
          this.setState({userImage: user.image});
        }

        msg.image = user.image;
        arrayMsg.push(msg);

        if(qty === i + 1){
          this.setState({allMsg: arrayMsg});      
          $(".chat__message").scrollTop($(".chat__message")[0].scrollHeight);
        }
      });

    })
  }

  render(){

    return (
      <>

        {
          this.state.logged
          ? (
            <div className="chat modal">
              <div className="chat__top">
                <a className="chat__back" href="/chat">
                  <i></i>
                </a>
                <div className="chat__name">
                  <label> Flores </label>
                </div>

                <div className="chat__caracteres">
                  <label> <b>310</b> caracteres </label>
                </div>

              </div>
              
              <MsgBox allMsg={this.state.allMsg} />

              <div className="chat__textarea">
                <textarea value={this.state.msg} onKeyPress={this.msgpressed} onChange={this.msgUpdate} placeholder="Digite sua mensagem aqui..."></textarea>
              </div>
            </div>
          )
          : ("")
        }

      </>
      
    );

  }
}

export default Chat;
