import React from 'react';

const Audits = () => {
  const apps = [
    {
      name: '1. CCex Bank Staking Platform',
      image: 'https://i.ibb.co/PcWKQTq/Decentralized-stacking-platform-Audit-3-hours.jpg',
      description: 'Decentralized Bank Staking Platform. - Audit 3 hours. - Click Image to see the project,',
      link: 'https://github.com/gonzalolater/CCex-Staking-Platform'
    },
    {
      name: '2. DeFi Exchange with Node v16.20.0',
      image: 'https://i.ibb.co/sjrGPj2/img-4.png',
      description: 'Decentralized Financial Exchange - 8 hours audit. - Click on the image to see the project and read all the Issues and Recommendations',
      link: 'https://github.com/gonzalolater/DeFiExchange'
    },{
      name: '3. playflysports',
      image: 'https://ibb.co/ydKcY1F',
      link: 'https://github.com/gonzalolater/playflysports'
    }
    
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
     <ul style={{textAlign:'center'}}>
      <li>Malware Here: </li>
      <a target="_blank" rel="noopener noreferrer"  href="https://github.com/gonzalolater/CCex-Staking-Platform/blob/main/server/routes/transactions.js#L9">CCex-Staking-Platform</a>
      <li>Malware Here: </li>
      <a target="_blank" rel="noopener noreferrer"  href="https://github.com/gonzalolater/DeFiExchange/blob/main/backend/src/routes/api/ieo.route.js#L1">DeFiExchange</a>
      <li>Malware Here: </li>
      <a target="_blank" rel="noopener noreferrer"  href="https://github.com/gonzalolater/playflysports/edit/main/Malvere%20full%20stack/backend-master/imageDetails.js#Object">Playflysports</a>
    </ul>
    <p style={{textAlign:'center', marginBottom: '40px'}}>The code is from a malware family called BeaverTail described here: <a target="_blank" rel="noopener noreferrer"  href="https://unit42.paloaltonetworks.com/two-campaigns-by-north-korea-bad-actors-target-job-hunters/">Link</a></p>
    </div>
  );
};

export default Audits;