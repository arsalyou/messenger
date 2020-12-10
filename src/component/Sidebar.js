import React, { useEffect, useState } from 'react';
import "./Sidebar.css"
import { Avatar, Button, IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SidebarChat from './SidebarChat';
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice'
import db, { auth } from '../firebase'

function Sidebar(props) {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })
            ))
        ))
}, [])

    const addChat = ()=>{

        const name = prompt("ENTER CHAT Name");
        if(name){
        db.collection('chats').add({
            chatName: name,
        });
        }

    }

return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar src={user.photo} onClick={() => auth.signOut()} className="sidebar_avatar">N</Avatar>
            <div className="search_area">
                <SearchIcon></SearchIcon>
                <input></input>
            </div>
            <AddCircleIcon onClick={addChat} />

        </div>
        <div className="sidebar_chats">
            {chats.map(({id, data:{chatName}}) => (
                 <SidebarChat key={id} id={id} chatName={chatName} />
            ))}
        </div>
    </div>
);
}

export default Sidebar;