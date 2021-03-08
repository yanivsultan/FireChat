import React from 'react'
import './components/ChatMessage.css'

const ChatMessage = ({message, auth}) => {

    const messageClass = message.uid===auth.currentUser.uid ? 'Sent' : 'Recieved';
    return (
        <div className={`ChatMessage Message${messageClass}`}>
            <img src={message.photoURL} alt=""/>
            <span className="Message">
            {message.text}
            </span>
        </div>
    )
}

export default ChatMessage
