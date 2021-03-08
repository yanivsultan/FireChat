import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage";
import "./ChatRoom.css";

const ChatRoom = ({ firebase }) => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <div className="ChatRoom">
      <div className="RoomHeader">
        <h5>Chat Room</h5>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>

      <div className="RoomMessages">
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
      </div>
      <div className="RoomFooter">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
