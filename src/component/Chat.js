import { IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Chat.css'
import MicNoneIcon from '@material-ui/icons/MicNone';
import Message from './Message';
import { selectChatName, selectChatId } from '..//features/chatSlice'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';
import db from '../firebase';
import firebase from 'firebase'

function Chat(props) {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [msgs, setMsgs] = useState([]);
    const currentUser = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);

    useEffect( ()=>{
        if(chatId){
            console.log(chatId);
            db.collection("chats").doc(chatId).collection("messages").orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setMsgs(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                        

                    }))
                ));
        }
    },[chatId]);

    const sendMessage = (e) => {
        e.preventDefault();

        //db
        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName,
        })

        //
        setInput('');


    }

    return (
        <div className="chat">
            {/*Chat header*/}
            <div className="chat_header">
                <h4>To : <span className="current_chat">{currentUser}</span></h4>

                <strong>Details</strong>

            </div>
            {/*Chat body*/}
            <div className="chat_messages">
                
                {msgs.map(({id, data})=>{
                   
                        
                     return <Message key={id} contents={data}></Message>
                    
                    

                })}
               
            </div>

            {/*Chat input*/}
            <div className="chat_input">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="message"></input>
                    <button onClick={sendMessage}>Send</button>
                    
                   
                        <MicNoneIcon>

                        </MicNoneIcon>
                    
                </form>


            </div>

        </div>
    );
}

export default Chat;