import React from 'react';
import './Audits.css';

const Audits = () => {
  const apps = [
    {
      name: 'CCex-Staking-Platform',
      image: 'https://i.ibb.co/PcWKQTq/Decentralized-stacking-platform-Audit-3-hours.jpg',
      description: 'Decentralized stacking platform. - Audit 3 hours. - Click Image to see the project',
      link: 'https://github.com/gonzalolater/CCex-Staking-Platform'
    },
    {
      name: 'DeFiExchange with Node v16.20.0',
      image: 'https://i.ibb.co/sjrGPj2/img-4.png',
      description: 'Decentralized exchange - 8 hours audit. - Click on the image to see the project and read all the Issues and Recommendations.',
      link: 'https://github.com/gonzalolater/DeFiExchange'
    },
    // Agrega más objetos para cada aplicación que desees mostrar
  ];

  return (
    <div className="auditsContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Auditorys</h1>
      <h1 style={{ textAlign: 'center'}}>Audited Projects</h1>
      {apps.map((app, index) => (
        <div style={{ textAlign: 'center' }} key={index}>
          <h2 >{app.name}</h2>
          <a href={app.link}>
            <img src={app.image} alt={app.name} />
          </a>
          <p>{app.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Audits;