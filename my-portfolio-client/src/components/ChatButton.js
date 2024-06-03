import React, { useState } from 'react';
import Chat from './Chat';

const ChatButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
        }}
        onClick={openModal}
      >
        Chat With IA
      </button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: '20px',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Aquí puedes hacer llamadas a la API de ChatGPT para mostrar el chat */}
            <Chat />
        </div>
      )}
    </div>
  );
};

export default ChatButton;