import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { role: 'user', content: newMessage }]);
      const response = await axios.post('https://polite-ground-030dc3103.4.azurestaticapps.net/', {
        prompt: newMessage,
        max_tokens: 60
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
      });
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: response.data.choices[0].text.trim() }]);
      setNewMessage('');
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{ height: '300px', overflowY: 'scroll' }} ref={chatRef}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {messages.map((message, index) => (
          <div key={index}>{message.role}: {message.content}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;