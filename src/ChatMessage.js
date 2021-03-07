import React from 'react'

const ChatMessage = ({message, auth}) => {

    const messageClass = message.uid===auth.currentUser.uid ? 'sent' : 'recieved';
    return (
        <div className={`message_${messageClass}`}>
            <img src={message.photoURL} alt=""/>
            {message.text}
        </div>
    )
}

export default ChatMessage
