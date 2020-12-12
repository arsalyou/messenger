import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Message.css'

//destructuring params + OPTIONAL CHAINING
const Message = ({id, contents:{
    timestamp, displayName, uid, photo, email, message},
}) => {
    const user = useSelector(selectUser);

    return (
        <div className={`message ${user.email === email && "message_sender"}`}>
            <Avatar className="avatar" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
};

export default Message;