import React from 'react';
import './feed.css'
const { userLogged, toPost } = require('../Firebase');

class ToPost extends React.Component {

  state = {
    userId: false,
    msg: ''
  }

  constructor(props){
    super(props)
    
    this.msgUpdate = this.msgUpdate.bind(this);
  }

  componentDidMount(){
    
    userLogged(user => {
      if(user){
        this.setState({userId: user.id})
      }
    });

  }

  msgUpdate = event => this.setState({ msg: event.target.value});

  toPostMethod = () => {
    toPost(this.state.userId, this.state.msg);
    window.location.reload();
  }

  render(){
    return (
      <div className="feed__topost">
        
        <textarea placeholder="Compartilhe algo..." value={this.state.msg} onChange={this.msgUpdate}></textarea>
        <div className="feed_topost-footer">
          <button onClick={this.toPostMethod}>Postar</button>
        </div>

      </div>
    );
  }
}

export default ToPost;
