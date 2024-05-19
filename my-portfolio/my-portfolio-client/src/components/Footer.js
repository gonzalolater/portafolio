import React from 'react';

const Footer = () => {
    const footerStyle = {
        background: 'violet',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '1px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
      };
  
    return (
    <div>
       <>
        <footer style={footerStyle}>
          <h2>My Portfolio Full Responsive</h2>
        </footer>
      </>
    </div>
  );
};

export default Footer;