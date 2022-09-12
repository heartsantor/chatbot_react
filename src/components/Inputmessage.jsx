import React, { useState } from "react";

export default function InputMessage({ handleAddMessage }) {
  const [message, setMessage] = useState("");
  return (
    <div className="input-message">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddMessage(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Type A Message"
          onChange={e => {
            setMessage(e.target.value);
          }}
          name="message"
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
