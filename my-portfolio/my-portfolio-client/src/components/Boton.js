import React from 'react';

const Boton = () => {
  return (
    <div>
      <button
        style={{
          marginRight: '10px',
          padding: '10px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Conectar Wallets
      </button>
      <button
        style={{
          marginRight: '20px',
          padding: '10px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Conectar con Mercado Pago
      </button>
    </div>
  );
};

export default Boton;