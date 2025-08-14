import React from "react";

export default function Chats() {
  return (
    <div>
      {/* left >> */}
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">
          Put me on the Council and not make me a Master!??
        </div>
      </div>

      {/* right >> */}
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">
          You have been given a great honor.
        </div>
      </div>
      {/* right >> */}
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">
          You have been given a great honor.
        </div>
      </div>
      {/* left >> */}
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">
          Put me on the Council and not make me a Master!??
        </div>
      </div>
    </div>
  );
}