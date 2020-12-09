import React from 'react';
import './Login.css';
import {auth, provider} from "../firebase.js"


const login = () => {

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message)); 

    }
    return (
        <div>
              <div className="login">
            <div className="login_logo">
                <img src="https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/120380/1d104deb-1dc0-4633-b09b-1c43ba85ac3c.jpg"></img>
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
        </div>
    );
};

export default login;