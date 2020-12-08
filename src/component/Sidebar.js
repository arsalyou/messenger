import React from 'react';
import "./Sidebar.css"
import { Avatar, Button, IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SidebarChat from './SidebarChat';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar">N</Avatar>
                <div className="search_area">
                    <SearchIcon></SearchIcon>
                    <input></input>
                </div>
                <AddCircleIcon />

            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
        </div>
    );
}

export default Sidebar;