import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import '../styles.css';

const socket = io('https://carenest-grcr.onrender.com'); // Change if deployed

const ChatPage = ({ currentUser, chatPartner }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const roomId = [currentUser, chatPartner].sort().join('-');

  useEffect(() => {
    socket.emit('joinRoom', { sender: currentUser, receiver: chatPartner });

    socket.on('receiveMessage', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [currentUser, chatPartner]);

  useEffect(() => {
    axios.get(`/api/chat/${currentUser}/${chatPartner}`)
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, [currentUser, chatPartner]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      sender: currentUser,
      receiver: chatPartner,
      text: message
    };

    socket.emit('sendMessage', newMsg);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">{chatPartner}</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.sender === currentUser ? 'self' : 'other'}`}
          >
            <span>{msg.text}</span>
            <div className="chat-time">{new Date(msg.timestamp).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
