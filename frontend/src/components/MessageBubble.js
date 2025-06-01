import React from 'react';

const MessageBubble = ({ msg, currentUser }) => {
  const isOwn = msg.sender === currentUser;
  return (
    <div className={`message-bubble ${isOwn ? 'own' : 'other'}`}>
      <div className="message-text">{msg.message}</div>
      <div className="message-time">{new Date(msg.timestamp).toLocaleTimeString()}</div>
    </div>
  );
};

export default MessageBubble;
