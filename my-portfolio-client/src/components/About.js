import React from 'react';
import './About.css'; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1
        style={{
          margin: '5px',
          border: '5px solid black',
          padding: '10px',
        }}
      >
        About This Portfolio TOP 25 Global Microsoft Azure Hackaton
      </h1>
      <img
        src="https://github.com/gonzalolater/portafolio/assets/42863568/bfeb85a4-e013-4bb5-a8ab-444eb59ecfe2"
        alt="Portfolio Preview"
        style={{
          display: 'block',
          margin: '20px auto',
          maxWidth: '80%',
          height: 'auto',
        }}
      />
      <p
        style={{
          margin: '10px',
        }}
      >
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
      <br />
      <a
        href="https://devpost.com/software/portfolio-fullstack-chat-with-ia"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#03a9f4',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      >
        Go to Devpost
      </a>
      {/* Imágenes lado a lado, responsivas */}
      <div className="about-gallery-container">
        <a href="https://ibb.co/RT4pVDHD" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.ibb.co/k26gWScS/Imagen-de-Whats-App-2025-06-05-a-las-01-59-08-bc5ea2b1.jpg"
            alt="Imagen-de-Whats-App-2025-06-05-a-las-01-59-08-bc5ea2b1"
            className="about-gallery-img"
          />
        </a>
        <a href="https://ibb.co/LDyN9vM5" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i.ibb.co/wZqcpYTs/Imagen-de-Whats-App-2025-06-05-a-las-01-59-30-0b3f4994.jpg"
            alt="Imagen-de-Whats-App-2025-06-05-a-las-01-59-30-0b3f4994"
            className="about-gallery-img"
          />
        </a>
      </div>
    </div>
  );
};

export default About;