import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1
        style={{
          margin: '5px', // Margen de 5px alrededor del borde
          border: '5px solid black', // Borde de 5px de color negro
          padding: '10px', // Espaciado interno para que el texto no toque el borde
        }}
      >
        About This Portfolio TOP 25 Global Microsoft Azure Hackaton
      </h1>
      <img
        src="https://github.com/gonzalolater/portafolio/assets/42863568/bfeb85a4-e013-4bb5-a8ab-444eb59ecfe2"
        alt="Portfolio Preview"
        style={{
          display: 'block',
          margin: '20px auto', // Centra la imagen horizontalmente
          maxWidth: '80%', // Ajusta el tamaño de la imagen para que no sea demasiado grande
          height: 'auto',
        }}
      />
      <p
        style={{
          margin: '10px', // Agrega un margen de 10px alrededor del párrafo
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
          backgroundColor: '#03a9f4', // Color azul para diferenciarlo del botón de GitHub
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      >
        Go to Devpost
      </a>
    </div>
  );
};

export default About;