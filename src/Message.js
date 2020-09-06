import React from 'react'
import './Message.css'


function Message({message, username}) {
    const currentUser = username === message.username;
    return (
        <div className={`message__card ${currentUser && 'message__user'}`}>
            <div className={currentUser ? "message__me" : "message__userStyle"}>

                    {message.username}: {message.message}

            </div>
        </div>    
       
    )
}

export default Message
