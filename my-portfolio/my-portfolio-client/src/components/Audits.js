import React from 'react';

const Audits = () => {
  const apps = [
    {
      name: 'CCex-Staking-Platform',
      image: 'https://i.ibb.co/PcWKQTq/Decentralized-stacking-platform-Audit-3-hours.jpg',
      description: 'Decentralized stacking platform. - Audit 3 hours. - Click Image to see the project',
      link: 'https://github.com/gonzalolater/CCex-Staking-Platform'
    },
    {
      name: 'App 2',
      image: 'url_de_la_imagen_2',
      description: '',
      link: 'url_del_link_2'
    },
    // Agrega más objetos para cada aplicación que desees mostrar
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Audits</h1>
      <h2 style={{ textAlign: 'center' }}>Audited Projects</h2>
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