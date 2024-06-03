import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faLocationArrow, faFire } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';


const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '110px',
        minHeight: '100vh',
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
      <div>
        <h1 style={{ padding: '20px', textAlign: 'center' }}>Gonzalo Daniel Aguilar</h1>
        <ul style={{ fontSize: '20px', fontWeight: 'bold' }}>
          <li>Software Engineer, more than 10,000 hours of development.</li>
          <li>Full Stack Web 2 & 3 Developer.</li>
          <li>Oficial Alchemy Certified Ethereum Developer.</li>
          <li>Agile Coach - Project Manager - Scrum Master.</li>
          <li>Polygon, Algorand, Chainlink, Solana & DeFi Builder.</li>
          <li>Microsoft Cybersecurity.</li>
          <li>Microsoft Azure IA Developer.</li>
        </ul>
        
        <a
          href="https://www.linkedin.com/in/gonzalo-daniel-aguilar/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red',
            fontSize: '1.2em',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '5px' }} />
          LinkedIn
        </a>
        <a
          href="https://github.com/gonzalolater"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red',
            fontSize: '1.2em',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '5px' }} />
          GitHub
        </a>
                <a
          href="https://lol.fandom.com/wiki/Dodging_Bullets"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red',
            fontSize: '1.2em',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '5px' }} />
          Leaguepedia
        </a>
        <a
          href="https://fin.guru/u/gonzalo-daniel-aguilar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red',
            fontSize: '1.2em',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '5px' }} />
          FinGurú
        </a>
        <a
          href="https://www.freecodecamp.org/GonzaloDanielAguilar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: 'red',
            fontSize: '1.2em',
            marginTop: '10px',
          }}
        >
          <FontAwesomeIcon icon={faFire} style={{ marginRight: '5px' }} />
          FreeCodeCamp
        </a>
      </div>
      <Carousel/>
    </div>
  );
};

export default Home;

