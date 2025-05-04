import React from 'react';
import ChatButton from './ChatButton';
import './Footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <h2>My Portfolio Full Responsive <ChatButton className="chat-button-container"/></h2>
    </footer>
  );
};

export default Footer;