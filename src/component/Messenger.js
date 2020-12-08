import React from 'react';
import "./Messenger.css"
import Sidebar from './Sidebar'
import Chat from './Chat'

function Messenger(props) {
    return (
        <div className="messenger">
          
            {/*Sidebar */}
            <Sidebar></Sidebar>

            {/*Chat */}
            <Chat />

            {/*Sidebar */}


            {/*Sidebar */}

        </div>
    );
}

export default Messenger;