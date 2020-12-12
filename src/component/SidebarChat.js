import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import { useSelector, useDispatch } from "react-redux";
import { setChat } from '../features/chatSlice';
import db from '../firebase';

function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();
    const [chatinfo , setChatinfo] = useState([]);

    useEffect(()=>{
        db.collection("chats").doc(id).collection("messages")
        .orderBy("timestamp" , "desc")
        .onSnapshot(snapshot => setChatinfo(snapshot.docs.map(doc => doc.data())))
    }, [id])

    const updateChat= () =>{
        dispatch(setChat({chatId : id, chatName : chatName}))

    }

    return (
        <div onClick={updateChat} className="sidebar_chat">
            <Avatar src={chatinfo[0]?.photo}/>
            <div className="sidebar_chatinfo">
                <h3>{chatName}</h3>
                <p>{chatinfo[0]?.message}</p>
                <small>{new Date(chatinfo[0]?.timestamp?.toDate()).toLocaleString}</small>

            </div>
        </div>
    );
}

export default SidebarChat;