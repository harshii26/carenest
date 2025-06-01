import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import TextToSpeech from './TextToSpeech';
import '../styles.css';

const socket = io('https://carenest-grcr.onrender.com'); // adjust for production

const Chat = ({ sender, receiver }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    socket.emit('joinRoom', { sender, receiver });

    axios.get(`/api/chat/history?sender=${sender}&receiver=${receiver}`)
      .then(res => setMessages(res.data));

    socket.on('receiveMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
      new Audio('/assets/notification.mp3').play();
    });

    return () => socket.off('receiveMessage');
  }, [sender, receiver]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msg = { sender, receiver, message, timestamp: new Date() };
    socket.emit('sendMessage', msg);
    setMessages([...messages, msg]);
    setMessage('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} currentUser={sender} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-section">
        <input
          className="chat-input"
          value={message}
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="chat-send-btn" onClick={sendMessage}>Send</button>
      </div>

      <TextToSpeech messages={messages} />
    </div>
  );
};

export default Chat;
