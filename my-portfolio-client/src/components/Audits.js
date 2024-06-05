import React from 'react';

const Audits = () => {
  const apps = [
    {
      name: 'CCex Bank Staking Platform',
      image: 'https://i.ibb.co/PcWKQTq/Decentralized-stacking-platform-Audit-3-hours.jpg',
      description: 'Decentralized Bank Staking Platform. - Audit 3 hours. - Click Image to see the project',
      link: 'https://github.com/gonzalolater/CCex-Staking-Platform'
    },
    {
      name: 'DeFi Exchange with Node v16.20.0',
      image: 'https://i.ibb.co/sjrGPj2/img-4.png',
      description: 'Decentralized Financial Exchange - 8 hours audit. - Click on the image to see the project and read all the Issues and Recommendations.',
      link: 'https://github.com/gonzalolater/DeFiExchange'
    },
    // Agrega más objetos para cada aplicación que desees mostrar
  ];

  return (
    <div
      style={{
        marginBottom: '90px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', marginTop: '110px' }}>Audited Projects - North Korean Hacking Activity</h1>
      {apps.map((app, index) => (
        <div
          style={{
            textAlign: 'center',
            marginTop: '-30px',
            marginBottom: '20px',
            width: '80%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
          key={index}
        >
          <h2 style={{
            textDecoration: app.name === 'CCex Bank Staking Platform' || app.name === 'DeFi Exchange with Node v16.20.0' ? 'underline' : 'none'
          }}>{app.name}</h2>
          <a href={app.link}>
            <img
              src={app.image}
              alt={app.name}
              style={{maxWidth: '100%', height: 'auto', width: '100%'}}
            />
          </a>
          <p style={{fontWeight: 'bold', color: 'red'}}>{app.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Audits;