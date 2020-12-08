import React from 'react';
import "./Sidebar.css"
import {Avatar, Button, IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
function Sidebar(props) {
    return (
        <div className="sidebar">
             <div className="sidebar_header">
             <Avatar >N</Avatar>
             <div className="search_area">
                <SearchIcon></SearchIcon>
                <input></input>
             </div>
            <AddCircleIcon/>

             </div>
             <div className="sidebar_chat">
                 
                 </div>
        </div>
    );
}

export default Sidebar;