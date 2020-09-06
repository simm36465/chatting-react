import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("please enter your name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setMessages([...messages,{username: username, message: input}]);
    setInput('');
  }
  return (
    <div className="App">
        <div className="App__header">
          <h1>ChatApp</h1>
          <h1>Welcome back <em>{username}</em></h1>
        </div>
        <div className="App__body">
            {
              messages.map(message =>(
                <Message username={username} message={message} />
              ))
            }
        </div>
        <div className="App__footer">
          <form>
              <input value={input} onChange={event => setInput(event.target.value)} />
              <button disabled={!input} variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}>Send !</button>
          </form>
        </div>
    </div>
  );
}

export default App;
