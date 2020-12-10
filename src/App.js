import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import Messenger from './component/Messenger'
import { selectUser, login, logout } from './features/userSlice'
import Login from './component/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          photo: authUser.photoURL
         })
        );

      } else {
        dispatch(logout());

      }
    })

  }, [])

  return (
    <div className="App">
      {user ? <Messenger /> : <Login></Login>}
    </div>
  );
}

export default App;
