import React, { useState } from 'react';
import './Chat.css'

function Chat(props) {

    const [input, setInput]= useState('')

    const sendMessage = (e) =>{
        e.preventDefault();

        //db 
         


        //
        setInput('');


    }

    return (
        <div className="chat">
            {/*Chat header*/}
            <div className="chat_header">
                <h4>To:<span className="current_chat">YOgdfgfd</span></h4>
                
                <strong>Details</strong>





            </div>
            {/*Chat body*/}
            <div className="">

            </div>

            {/*Chat input*/}
            <div className="chat_input">
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="message"></input>
                    <button onClick={sendMessage}>Send</button>
                </form>


            </div>

        </div>
    );
}

export default Chat;