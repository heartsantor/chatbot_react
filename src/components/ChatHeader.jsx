import React from "react";
import Avtar from "../user.png";

export default function ChatHeader() {
  return (
    <div className="chat-header-wrapper">
      <img src={Avtar} className="user-avatar" alt="user-avatar" />
      <span>Sample Chatbot User</span>
    </div>
  );
}
