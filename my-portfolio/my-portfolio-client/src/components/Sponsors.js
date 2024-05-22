import React from 'react';

const Sponsors = () => {
  return (
    <div style={{
        marginTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1>Sponsors</h1>
      <p>Quiero agradecer a las siguientes empresas por su apoyo en mi formación profesional:</p>
      <div className="sponsors">
        <a href="https://www.microsoft.com">
          <img src="ruta/imagen/microsoft.png" alt="Microsoft" />
        </a>
        <a href="https://www.google.com">
          <img src="ruta/imagen/google.png" alt="Google" />
        </a>
        <a href="https://www.alchemy.edu">
          <img src="ruta/imagen/alchemy.png" alt="Alchemy University" />
        </a>
        <a href="https://www.platzi.com">
          <img src="ruta/imagen/platzi.png" alt="Platzi" />
        </a>
        <a href="https://www.linkedin.com">
          <img src="ruta/imagen/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://www.freecodecamp.org">
          <img src="ruta/imagen/freecodecamp.png" alt="FreeCodeCamp" />
        </a>
      </div>
    </div>
  );
}

export default Sponsors;