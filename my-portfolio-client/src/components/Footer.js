import React from 'react';
import ChatButton from './ChatButton';

const Footer = () => {
  const footerStyle = {
    background: 'violet',
    color: 'red',
    textAlign: 'center',
    padding: '1px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '20px',
  };

  const h2Style = {
    marginRight: '10px',
    textAlign: 'center',
    flex: 1,
  };

  const chatButtonStyle = {
    marginRight: '40px',
  };

  return (
    <div>
      <>
        <footer style={footerStyle}>
          <h2 style={h2Style}>My Portfolio Full Responsive</h2>
          <div style={chatButtonStyle}>
            <ChatButton />
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;