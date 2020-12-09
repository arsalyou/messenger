import React from 'react';
import './App.css';
import {useSelector} from "react-redux"
import Messenger from './component/Messenger'
import {selectUser} from './features/userSlice'
import Login from './component/Login';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
     {user ? <Messenger/> : <Login></Login>}
    </div>
  );
}

export default App;
