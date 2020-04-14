import React from 'react';
import Msg from './Msg';
import './chat.css';

class MsgBox extends React.Component {

    render(){

        const { allMsg } = this.props;

        return (

            <div className="chat__message">

                {
                    allMsg &&
                    allMsg.length > 0 &&
                    allMsg.map(item => <Msg who={item.who} msg={item.msg} />)
                }

            </div>
        );
    }
  
}

export default MsgBox;
