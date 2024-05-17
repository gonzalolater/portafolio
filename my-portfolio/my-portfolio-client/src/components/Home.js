import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '60px', // Ajusta la altura según corresponda
      }}
    >
      <img
        src="https://i.ibb.co/Gn3fxfv/foto-perfil.jpg"
        alt="Foto de perfil"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1>Gonzalo Daniel Aguilar</h1>
        <a
          href="https://www.linkedin.com/in/gonzalo-daniel-aguilar/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red', // Color rojo
            fontSize: '1.2em', // Tamaño de fuente más grande
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '5px' }} />
          LinkedIn
        </a>
        <p>Más información sobre mí:</p>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
          }}
        >
          <li>Experiencia laboral</li>
          <li>Educación</li>
          <li>Habilidades</li>
          <li>Proyectos destacados</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;