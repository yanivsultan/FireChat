import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMessage from '../ChatMessage';



const ChatRoom = ({firebase}) => {

    const auth=firebase.auth()
    const firestore=firebase.firestore()

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('')


    const sendMessage = async (e) => {
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser;

    await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
    })

    setFormValue('')
    }

    return (
        <div>
            <h2>Chat Room</h2>
            <button onClick={()=>auth.signOut()} >Sign Out</button>
            {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg} auth={auth} />)}

            <form onSubmit={sendMessage}>

            <input type="text" value={formValue} onChange={(e)=>setFormValue(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ChatRoom
