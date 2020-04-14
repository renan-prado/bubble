import React from 'react';
import './chat.css';

class Msg extends React.Component {

    render(){

        const { who, msg } = this.props;

        return (

            <div className={ who === 'me' ? "chat__message-msg --me" : "chat__message-msg --you"}>
                <div className="chat__message-photo"></div>
                <div className="chat__message-talk">
                <label> { msg } </label>
                </div>
            </div>
        );
    }
  
}

export default Msg;
