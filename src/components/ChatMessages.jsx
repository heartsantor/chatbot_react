import React, { forwardRef } from "react";

export default forwardRef(({ messages }, ref) => {
  const _getClassName = type => {
    if (type === "user") {
      return "chat-bubble-sender";
    }
    return "chat-bubble-reciever";
  };
  return (
    <div className="message-container">
      {messages.map(({ message, type }, index) => (
        <div key={index} className={`chat-bubble ${_getClassName(type)}`}>
          <p>{message}</p>
        </div>
      ))}
      <div ref={ref} className="to-scroll-div" />
    </div>
  );
});
