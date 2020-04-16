import React from 'react';
import './chat.css';
const { userLogged } = require('../Firebase');

class Msg extends React.Component {

    state = {
        userId: false
    }

    componentDidMount(){
        userLogged(user => this.setState({userId: user.id}))
    }

    render(){

        const { who, msg, image } = this.props;

        return (

            <div className={ who === this.state.userId ? "chat__message-msg --me" : "chat__message-msg --you"}>
                <div className="chat__message-photo" style={{ 'backgroundImage': `url(/${image})` }}></div>
                <div className="chat__message-talk">
                <label> { msg } </label>
                </div>
            </div>
        );
    }
  
}

export default Msg;
