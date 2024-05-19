const Boton = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <button
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
      >
        Connect Wallets
      </button>
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
      >
        Conenct Mercado Pago
      </button>
    </div>
  );
};

export default Boton;