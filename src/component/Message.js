import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css'

//destructuring params + OPTIONAL CHAINING
const Message = ({id, contents:{
    timestamp, displayName, uid, photo, email, message},
}) => {
    return (
        <div className="message">
            <Avatar src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
};

export default Message;