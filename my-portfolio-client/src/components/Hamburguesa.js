import React from 'react';

const Hamburguesa = ({ color }) => {
  const lineStyle = {
    width: '30px',
    height: '3px',
    backgroundColor: color || '#333',
    marginBottom: '5px',
    transition: 'background-color 1s ease', // Mantiene la transición
  };

  return (
    <div style={{ // Añadimos un div contenedor con flex-direction: column
      display: 'flex',
      flexDirection: 'column', // Apila los elementos verticalmente
      justifyContent: 'space-between', // Distribuye el espacio entre las líneas
      height: '18px', // Altura fija para el contenedor
    }}>
      <div className="line" style={lineStyle}></div>
      <div className="line" style={lineStyle}></div>
      <div className="line" style={{ ...lineStyle, marginBottom: 0 }}></div>
    </div>
  );
};

export default Hamburguesa;