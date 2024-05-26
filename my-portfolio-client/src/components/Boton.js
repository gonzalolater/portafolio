import React, { useState } from 'react';

const Boton = () => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const connectWallet = () => {
    if (selectedWallet) {
      console.log(`Connecting with ${selectedWallet}`);
      // Aquí puedes agregar la lógica para conectar con la billetera seleccionada
    } else {
      console.error('No wallet selected');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <select
        style={{
          marginTop: '10px',
          marginRight: '10px',
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: 'red',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        value={selectedWallet}
        onChange={handleWalletChange}
      >
        <option value="">Select Wallet</option>
        <option value="Wallet Connect">Wallet Connect</option>
        <option value="Metamask">Metamask</option>
        <option value="Trust Wallet">Trust Wallet</option>
        <option value="Coinbase Wallet">Coinbase Wallet</option>

      </select>
      <button
        style={{
          marginTop: '10px',
          marginRight: '20px',
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: 'red',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Boton;