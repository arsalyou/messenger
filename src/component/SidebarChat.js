import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css"

function SidebarChat({id, chatName}) {
    return (
        <div className="sidebar_chat">
            <Avatar />
            <div className="sidebar_chatinfo">
                <h3>{chatName}</h3>
                <p>last msg</p>
                <small>time</small>

            </div>
        </div>
    );
}

export default SidebarChat;