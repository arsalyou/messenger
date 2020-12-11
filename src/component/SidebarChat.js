import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";
import { useSelector, useDispatch } from "react-redux";
import { setChat } from '../features/chatSlice';

function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();

    const updateChat= () =>{
        dispatch(setChat({chatId : id, chatName : chatName}))

    }

    return (
        <div onClick={updateChat} className="sidebar_chat">
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