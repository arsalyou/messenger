import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css'

const Message = ({id, contents}) => {
    return (
        <div className="message">
            <Avatar/>
            <p>Msg</p>
            <small>Time</small>
        </div>
    );
};

export default Message;