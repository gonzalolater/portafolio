import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>About This Portfolio</h1>
      <p>
        This portfolio was created by Gonzalo Daniel Aguilar. You can find the source code on GitHub.
      </p>
      <a
        href="https://github.com/gonzalolater/portafolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#6200ea',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      >
        Go to GitHub Repository
      </a>
    </div>
  );
};

export default About;