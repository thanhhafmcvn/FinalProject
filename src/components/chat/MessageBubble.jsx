import React from "react";
import { auth } from "../../../firebase/firebase.config";
const MessageBubble = ({ userId, avatar,name, createdAt, text }) => {
  const timer = new Date(createdAt?.seconds * 1000).toLocaleTimeString("en-US");
  return (
    <div>
      <div className={userId == auth?.currentUser?.uid ? "chat chat-end" : "chat chat-start"}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <div className="chat-header">
          {name}
          <time className="text-xs opacity-50 mx-3">{timer}</time>
        </div>
        <div className="chat-bubble">{text}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
