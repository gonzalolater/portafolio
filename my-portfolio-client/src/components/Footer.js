import React from 'react';
import ChatButton from './ChatButton';
import './Footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <h2>My Portfolio Full Responsive</h2>
      <div className="chat-button-container">
        <ChatButton />
      </div>
    </footer>
  );
};

export default Footer;